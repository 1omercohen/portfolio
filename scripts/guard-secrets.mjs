#!/usr/bin/env node
import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { extname } from "node:path";

const mode = process.argv.includes("--all") ? "all" : "staged";

const allowedExt = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".json",
  ".yml",
  ".yaml",
  ".env",
  ".md",
  ".txt",
]);

const excluded = [
  "node_modules/",
  "dist/",
  ".git/",
  ".husky/_/",
  "package-lock.json",
];

function getFiles() {
  const cmd = mode === "all"
    ? "git ls-files"
    : "git diff --cached --name-only --diff-filter=ACMRTUXB";

  const output = execSync(cmd, { encoding: "utf8" }).trim();
  if (!output) return [];

  return output
    .split("\n")
    .map((f) => f.trim())
    .filter(Boolean)
    .filter((f) => allowedExt.has(extname(f)) || f.endsWith(".env") || f.includes(".env."))
    .filter((f) => !excluded.some((x) => f.startsWith(x)));
}

function lineViolations(file, content) {
  const violations = [];
  const lines = content.split(/\r?\n/);

  const suspiciousAssignment = /(api[_-]?key|secret|token|password|private[_-]?key|client[_-]?secret)\s*[:=]\s*["'`][^"'`]{8,}["'`]/i;
  const emailJsService = /service_[a-zA-Z0-9]{3,}/;
  const emailJsTemplate = /template_[a-zA-Z0-9]{3,}/;
  const emailJsPublic = /(user|public)_[a-zA-Z0-9]{6,}/;

  const allowPattern = /(import\.meta\.env|process\.env|VITE_|YOUR_|<|\$\{)/;

  lines.forEach((line, idx) => {
    const n = idx + 1;
    if (line.includes("import.meta.env") || line.includes("process.env")) return;
    if (line.trim().startsWith("#")) return;

    if (suspiciousAssignment.test(line) && !allowPattern.test(line)) {
      violations.push(`${file}:${n} possible hardcoded secret`);
      return;
    }

    if ((emailJsService.test(line) || emailJsTemplate.test(line) || emailJsPublic.test(line)) && !allowPattern.test(line)) {
      violations.push(`${file}:${n} EmailJS key/id looks hardcoded`);
    }
  });

  return violations;
}

const files = getFiles();
const violations = [];

for (const file of files) {
  if (!existsSync(file)) continue;
  const content = readFileSync(file, "utf8");
  violations.push(...lineViolations(file, content));
}

if (violations.length > 0) {
  console.error("\n[guard-secrets] Blocked: detected possible hardcoded secrets/keys\n");
  violations.forEach((v) => console.error(`- ${v}`));
  console.error("\nUse environment variables only (import.meta.env / process.env).\n");
  process.exit(1);
}

console.log(`[guard-secrets] OK (${mode})`);
