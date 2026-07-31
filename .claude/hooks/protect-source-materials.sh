#!/usr/bin/env bash
set -euo pipefail

payload="${1:-$(cat)}"

node - "$payload" <<'NODE'
const payload = process.argv[2] || "";
let data;

try {
  data = JSON.parse(payload);
} catch {
  process.exit(0);
}

const input = data.tool_input || data.input || data;
const candidates = [
  input.file_path,
  input.path,
  input.target_file,
  input.destination,
].filter(Boolean);

const protectedPath = "assets/source-materials/original/";
const touchesProtectedSource = candidates.some((path) => {
  const normalized = String(path).replaceAll("\\\\", "/");
  return normalized.includes(protectedPath) || normalized.startsWith(protectedPath);
});

if (!touchesProtectedSource) {
  process.exit(0);
}

console.error(
  "Blocked: original source materials are read-only. Create derived files under assets/source-materials/derived/ instead."
);
process.exit(2);
NODE
