import path from "node:path";
import {
  excerpt,
  extractChecklistItems,
  extractHeadingSection,
  extractProjectPaths,
  extractTitle,
  listProjectFiles,
  parseMarkdownTable,
  readProjectFile,
  stripFrontmatter,
  stripMarkdown
} from "./markdown";
import { getSessionGuidance, type SessionGuidance } from "./session-guidance";

export type LessonSection =
  | "objective"
  | "source"
  | "demo"
  | "practice"
  | "assignment"
  | "artifact"
  | "validation"
  | "troubleshooting";

export interface CourseSession {
  number: number;
  slug: string;
  title: string;
  phase: string;
  topic: string;
  theory: string;
  practice: string;
  artifact: string;
  summary: string;
  heroImage: string;
  lessonPath: string;
  sourceMaterial?: SourceMaterial;
  sourceLinks: string[];
  checklist: string[];
  guidance: SessionGuidance;
  sections: Record<LessonSection, string>;
}

export interface SourceMaterial {
  session: string;
  file: string;
  type: string;
  pages: string;
  note: string;
}

interface CurriculumRow {
  number: number;
  phase: string;
  topic: string;
  theory: string;
  practice: string;
  artifact: string;
}

export function getCourseSessions(): CourseSession[] {
  const curriculum = new Map(parseCurriculum().map((row) => [row.number, row]));
  const sources = new Map(parseSourceMaterials().map((source) => [source.session, source]));

  return getLessonPaths().map((lessonPath) => {
    const raw = stripFrontmatter(readProjectFile(lessonPath));
    const number = getSessionNumber(lessonPath);
    const row = curriculum.get(number);
    const sections = extractLessonSections(raw);
    const sourceFile = sources.get(String(number))?.file;
    const sourceLinks = extractProjectPaths(sections.source).concat(
      isRealSourceFile(sourceFile) ? [`assets/source-materials/original/${sourceFile}`] : []
    );

    const topic = row?.topic ?? extractTitle(raw);
    const phase = row?.phase ?? inferPhase(number);
    const artifact = row?.artifact ?? firstMeaningfulLine(sections.artifact);

    return {
      number,
      slug: number === 12 ? "session-12-project-presentation" : path.basename(lessonPath, ".md"),
      title: extractTitle(raw),
      phase,
      topic,
      theory: row?.theory ?? "",
      practice: row?.practice ?? "",
      artifact,
      summary: excerpt(sections.objective || raw),
      heroImage: `/images/sessions/session-${String(number).padStart(2, "0")}.png`,
      lessonPath,
      sourceMaterial: sources.get(String(number)),
      sourceLinks: [...new Set(sourceLinks)],
      checklist: extractChecklistItems(sections.validation || raw),
      guidance: getSessionGuidance(number, { phase, topic, artifact }),
      sections
    };
  });
}

export function getCourseStats(sessions = getCourseSessions()) {
  const phases = [...new Set(sessions.map((session) => session.phase))];
  const artifacts = sessions.filter((session) => session.artifact).length;
  const checklists = sessions.reduce((total, session) => total + session.guidance.successCriteria.length, 0);

  return {
    sessionCount: sessions.length,
    phaseCount: phases.length,
    artifactCount: artifacts,
    checklistCount: checklists
  };
}

export function getPhaseGroups(sessions = getCourseSessions()) {
  return [...new Set(sessions.map((session) => session.phase))].map((phase) => ({
    phase,
    sessions: sessions.filter((session) => session.phase === phase)
  }));
}

function getLessonPaths(): string[] {
  const sessions = listProjectFiles("docs/lesson-prep")
    .filter((file) => /^docs\/lesson-prep\/session-\d+-.+\.md$/.test(file))
    .filter((file) => !file.includes("-prompts"))
    .sort();

  return sessions.concat("docs/lesson-prep/project-presentation-session.md");
}

function extractLessonSections(markdown: string): Record<LessonSection, string> {
  return {
    source: extractHeadingSection(markdown, ["Source"]),
    objective: extractHeadingSection(markdown, ["Mục Tiêu", "Objective", "Learning Objective"]),
    demo: extractHeadingSection(markdown, ["Demo"]),
    practice: extractHeadingSection(markdown, ["Thực Hành", "Practice"]),
    assignment: extractHeadingSection(markdown, ["Bài Tập", "Assignment"]),
    artifact: extractHeadingSection(markdown, ["Artifact", "Sản phẩm"]),
    validation: extractHeadingSection(markdown, ["Validation", "Checklist kiểm tra"]),
    troubleshooting: extractHeadingSection(markdown, ["Troubleshooting", "Xử Lý Sự Cố", "Backup"])
  };
}

function parseCurriculum(): CurriculumRow[] {
  return parseMarkdownTable(readProjectFile("docs/course-curriculum-map.md"))
    .map((row) => ({
      number: Number.parseInt(stripMarkdown(row["Buổi"] ?? ""), 10),
      phase: stripMarkdown(row["Phase"] ?? ""),
      topic: stripMarkdown(row["Chủ đề"] ?? ""),
      theory: stripMarkdown(row["Lý thuyết chính"] ?? ""),
      practice: stripMarkdown(row["Thực hành"] ?? ""),
      artifact: stripMarkdown(row["Artifact"] ?? "")
    }))
    .filter((row) => Number.isFinite(row.number));
}

function parseSourceMaterials(): SourceMaterial[] {
  return parseMarkdownTable(readProjectFile("docs/source-materials-index.md"))
    .map((row) => ({
      session: stripMarkdown(row["Buổi"] ?? ""),
      file: stripMarkdown(row["File nguồn"] ?? ""),
      type: stripMarkdown(row["Loại"] ?? ""),
      pages: stripMarkdown(row["Số trang"] ?? ""),
      note: stripMarkdown(row["Ghi chú"] ?? "")
    }))
    .filter((source) => /^\d+$/.test(source.session));
}

function getSessionNumber(lessonPath: string): number {
  const match = lessonPath.match(/session-(\d+)/);
  return match ? Number.parseInt(match[1], 10) : 12;
}

function inferPhase(number: number): string {
  if (number <= 4) return "Operate";
  if (number <= 9) return "Modify";
  if (number <= 11) return "Create";
  return "Presentation";
}

function isRealSourceFile(sourceFile?: string): sourceFile is string {
  return Boolean(sourceFile && !/chưa có|n\/a/i.test(sourceFile));
}

function firstMeaningfulLine(markdown: string): string {
  return (
    stripMarkdown(markdown)
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find(Boolean) ?? ""
  );
}
