import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";

export const projectRoot = process.cwd();

marked.setOptions({
  gfm: true,
  breaks: false
});

export function projectPath(relativePath: string): string {
  return path.join(projectRoot, relativePath);
}

export function readProjectFile(relativePath: string): string {
  return readFileSync(projectPath(relativePath), "utf8");
}

export function listProjectFiles(relativeDir: string): string[] {
  return readdirSync(projectPath(relativeDir))
    .filter((name) => !name.startsWith("."))
    .map((name) => path.join(relativeDir, name));
}

export function markdownToHtml(markdown: string): string {
  return marked.parse(markdown.trim(), { async: false }) as string;
}

export function classroomMarkdown(markdown: string): string {
  return markdown
    .replace(/`(?:docs|assets|\.claude)\/[^`]+`/g, "tài liệu đi kèm")
    .replace(/(?:docs|assets|\.claude)\/[^\s)]+/g, "tài liệu đi kèm");
}

export function classroomMarkdownToHtml(markdown: string): string {
  return markdownToHtml(classroomMarkdown(markdown));
}

export function stripFrontmatter(markdown: string): string {
  if (!markdown.startsWith("---")) return markdown;
  const closing = markdown.indexOf("\n---", 3);
  return closing >= 0 ? markdown.slice(closing + 4).trimStart() : markdown;
}

export function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .toLowerCase()
    .trim();
}

export function stripMarkdown(value: string): string {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^\s*\|?\s*:?-{3,}.*$/gm, "")
    .replace(/^\s*\|(.+)\|\s*$/gm, (_row, cells: string) => {
      const parts = cells
        .split("|")
        .map((cell) => cell.trim())
        .filter(Boolean);
      return parts[0] === "#" ? "" : parts.join(" — ");
    })
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/\|/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function excerpt(markdown: string, maxLength = 180): string {
  const text = stripMarkdown(markdown).replace(/\s+/g, " ");
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

export function extractTitle(markdown: string): string {
  return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? "Untitled";
}

export function extractHeadingSection(markdown: string, variants: string[]): string {
  const lines = markdown.split(/\r?\n/);
  const normalizedVariants = variants.map(normalizeText);

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{2,4})\s+(.+?)\s*#*\s*$/);
    if (!match) continue;

    const level = match[1].length;
    const title = normalizeText(match[2]);
    if (!normalizedVariants.some((variant) => title.includes(variant))) continue;

    let end = lines.length;
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const next = lines[cursor].match(/^(#{2,4})\s+/);
      if (next && next[1].length <= level) {
        end = cursor;
        break;
      }
    }

    return lines.slice(index + 1, end).join("\n").trim();
  }

  return "";
}

export function parseMarkdownTable(markdown: string): Record<string, string>[] {
  const tableLines = markdown
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|") && line.trim().endsWith("|"));

  if (tableLines.length < 3) return [];

  const headers = splitTableRow(tableLines[0]);
  return tableLines
    .slice(2)
    .filter((line) => !/^[-:\s|]+$/.test(line))
    .map((line) => {
      const cells = splitTableRow(line);
      return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]));
    });
}

export function extractChecklistItems(markdown: string): string[] {
  return markdown
    .split(/\r?\n/)
    .map((line) => line.match(/^\s*-\s+\[[ xX]\]\s+(.+)$/)?.[1]?.trim())
    .filter((item): item is string => Boolean(item));
}

export function extractProjectPaths(markdown: string): string[] {
  const matches = [...markdown.matchAll(/`((?:docs|assets|\.claude)\/[^`]+)`/g)];
  return [...new Set(matches.map((match) => match[1]))];
}

function splitTableRow(row: string): string[] {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}
