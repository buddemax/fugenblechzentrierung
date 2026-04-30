#!/usr/bin/env node
/**
 * Post-build: generate markdown mirrors of DE + EN landing pages from
 * src/i18n/content.ts. Output goes to dist/index.md and dist/en/index.md.
 *
 * Markdown is for AI agents requesting Accept: text/markdown via the
 * <link rel="alternate" type="text/markdown"> response header. HTML stays
 * the default for browsers; the .md variant is a pure mirror of the same
 * source of truth so it never drifts.
 */

import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { createHash } from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PUBLIC_DIR = join(ROOT, 'public');
const CONTENT_TS = join(ROOT, 'src', 'i18n', 'content.ts');

// --- Tiny TypeScript object literal extractor ---
// content.ts exports `content` as a plain object (no runtime types).
// We strip types and interfaces, then evaluate the literal.
async function loadContent() {
  const raw = await readFile(CONTENT_TS, 'utf8');
  // Drop the type Locale and the Content interface (everything before
  // `export const content`). Then strip the type annotation.
  const exportIdx = raw.indexOf('export const content');
  if (exportIdx === -1) throw new Error('content export not found');
  const after = raw.slice(exportIdx);
  const stripped = after
    .replace(/export const content:\s*Record<Locale, Content>\s*=/, 'const content =')
    .replace(/^\};\s*$/m, '};');
  const code = stripped + '\nexport { content };';
  // Write to a temp .mjs and import
  const tmp = join(ROOT, 'node_modules', '.cache', 'fbz-content.mjs');
  await mkdir(dirname(tmp), { recursive: true });
  await writeFile(tmp, code, 'utf8');
  const mod = await import(tmp + '?t=' + Date.now());
  return mod.content;
}

// --- Markdown rendering ---
function renderMarkdown(t, locale) {
  const lang = locale === 'de' ? 'Deutsch' : 'English';
  const lines = [];

  lines.push(`# ${t.meta.title}`);
  lines.push('');
  lines.push(`> ${t.meta.description}`);
  lines.push('');
  lines.push(`*${locale === 'de' ? 'Sprache' : 'Language'}: ${lang} · ${locale === 'de' ? 'Patent angemeldet' : 'Patent pending'}: ${t.hero.patentId}*`);
  lines.push('');
  lines.push('---');
  lines.push('');

  // Hero
  lines.push(`## ${t.hero.headlineLine1} ${t.hero.headlineLine2} ${t.hero.headlineLine3}`);
  lines.push('');
  lines.push(t.hero.sub);
  lines.push('');
  lines.push(`**${t.hero.specLabel}**`);
  lines.push('');
  for (const item of t.hero.specItems) {
    lines.push(`- **${item.k}**: ${item.v}`);
  }
  lines.push('');

  // Intro
  lines.push(`## ${t.intro.eyebrow}`);
  lines.push('');
  lines.push(t.intro.body);
  lines.push('');
  for (const fact of [t.intro.factA, t.intro.factB, t.intro.factC]) {
    lines.push(`- **${fact.k}**: ${fact.v}`);
  }
  lines.push('');

  // Problem
  lines.push(`## ${t.problem.headline}`);
  lines.push('');
  lines.push(`*${t.problem.question}*`);
  lines.push('');
  lines.push(t.problem.lead);
  lines.push('');
  lines.push(`### ${t.problem.keyInsight.title}`);
  lines.push('');
  lines.push(t.problem.keyInsight.body);
  lines.push('');
  lines.push(`*${t.problem.keyInsight.eyebrow} — ${t.problem.keyInsight.source}*`);
  lines.push('');
  for (const stat of t.problem.stats) {
    lines.push(`- **${stat.value} ${stat.unit}** — ${stat.label} *(${stat.source})*`);
  }
  lines.push('');
  lines.push(`### ${t.problem.errors.title}`);
  lines.push('');
  lines.push(t.problem.errors.intro);
  lines.push('');
  for (const e of t.problem.errors.items) {
    lines.push(`${e.num}. **${e.title}** — ${e.body}`);
  }
  lines.push('');

  // Solution
  lines.push(`## ${t.solution.headline}`);
  lines.push('');
  lines.push(`*${t.solution.question}*`);
  lines.push('');
  lines.push(t.solution.lead);
  lines.push('');
  for (const step of t.solution.steps) {
    lines.push(`${step.num}. **${step.title}** — ${step.body}`);
  }
  lines.push('');
  lines.push(`**${t.solution.timing.label}**: ${t.solution.timing.value}`);
  lines.push('');

  // Detail
  lines.push(`## ${t.detail.headline}`);
  lines.push('');
  lines.push(t.detail.lead);
  lines.push('');
  for (const a of t.detail.annotations) {
    lines.push(`- **${a.k}**: ${a.v}`);
  }
  lines.push('');
  lines.push(`*${t.detail.note}*`);
  lines.push('');

  // Benefits
  lines.push(`## ${t.benefits.headline}`);
  lines.push('');
  for (const item of t.benefits.items) {
    lines.push(`- **${item.title}** — ${item.body}`);
  }
  lines.push('');

  // Cost
  lines.push(`## ${t.cost.headline}`);
  lines.push('');
  lines.push(t.cost.lead);
  lines.push('');
  lines.push(`| | ${t.cost.withoutLabel} | ${t.cost.withLabel} |`);
  lines.push('|---|---|---|');
  for (const row of t.cost.rows) {
    lines.push(`| ${row.label} | ${row.without} | ${row.with} |`);
  }
  lines.push('');
  lines.push(`### ${t.cost.cascade.title}`);
  lines.push('');
  for (const c of t.cost.cascade.items) {
    lines.push(`- ${c}`);
  }
  lines.push('');

  // Applications
  lines.push(`## ${t.applications.headline}`);
  lines.push('');
  for (const a of t.applications.items) {
    lines.push(`- ${a}`);
  }
  lines.push('');

  // Credibility
  lines.push(`## ${t.credibility.headline}`);
  lines.push('');
  lines.push(t.credibility.body);
  lines.push('');
  for (const f of t.credibility.facts) {
    lines.push(`- **${f.k}**: ${f.v}`);
  }
  lines.push('');

  // CTA
  lines.push(`## ${t.cta.headline}`);
  lines.push('');
  lines.push(t.cta.body);
  lines.push('');
  lines.push(`- **${t.cta.mailLabel}**: info@bba-badsaarow.de`);
  lines.push(`- **${t.cta.phoneLabel}**: +49 174 4935860`);
  lines.push('');

  // Footer
  lines.push('---');
  lines.push('');
  lines.push(`*${t.footer.company} · ${t.footer.address}*`);
  lines.push(`*${t.footer.patent}*`);
  lines.push('');
  const canonical = locale === 'de'
    ? 'https://fugenblechzentrierung.de/'
    : 'https://fugenblechzentrierung.de/en/';
  lines.push(`*Canonical HTML: <${canonical}>*`);
  lines.push('');

  return lines.join('\n');
}

// --- Hash helper for agent-skills index ---
async function sha256OfFile(path) {
  const buf = await readFile(path);
  return createHash('sha256').update(buf).digest('hex');
}

async function updateAgentSkillsDigests() {
  const idxPath = join(DIST, '.well-known', 'agent-skills', 'index.json');
  let raw;
  try {
    raw = await readFile(idxPath, 'utf8');
  } catch {
    return;
  }
  const idx = JSON.parse(raw);
  for (const skill of idx.skills) {
    const url = new URL(skill.url, 'https://fugenblechzentrierung.de/');
    if (url.host !== 'fugenblechzentrierung.de') continue;
    const local = join(DIST, decodeURIComponent(url.pathname));
    try {
      await stat(local);
      skill.sha256 = await sha256OfFile(local);
    } catch {
      // Skip files that aren't local (e.g. blob video).
    }
  }
  idx.generatedAt = new Date().toISOString();
  await writeFile(idxPath, JSON.stringify(idx, null, 2) + '\n', 'utf8');
}

async function main() {
  const content = await loadContent();
  const targets = [
    { locale: 'de', out: join(DIST, 'index.md') },
    { locale: 'en', out: join(DIST, 'en', 'index.md') },
  ];
  for (const { locale, out } of targets) {
    await mkdir(dirname(out), { recursive: true });
    const md = renderMarkdown(content[locale], locale);
    await writeFile(out, md, 'utf8');
    console.log(`[md-mirror] wrote ${out} (${md.length} bytes)`);
  }
  await updateAgentSkillsDigests();
  console.log('[md-mirror] updated agent-skills index digests');
}

main().catch((err) => {
  console.error('[md-mirror] failed:', err);
  process.exit(1);
});
