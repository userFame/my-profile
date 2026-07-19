import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(toolDirectory, "..", "..");
const sourceDirectory = path.join(repositoryRoot, "site");
const outputDirectory = path.join(repositoryRoot, "dist");

async function totalBytes(directory) {
  let total = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    total += entry.isDirectory() ? await totalBytes(target) : (await stat(target)).size;
  }
  return total;
}

test("production text assets are minified and local references resolve", async () => {
  const html = await readFile(path.join(outputDirectory, "index.html"), "utf8");
  assert.equal(html.split(/\r?\n/).length, 1);
  assert.match(html, /portrait\.avif/);
  assert.match(html, /portrait\.webp/);
  assert.match(html, /portrait\.jpg/);
  assert.doesNotMatch(html, /portrait-enhanced\.png/);

  for (const reference of html.matchAll(/(?:src|href)=["']([^"'#?]+)["']/g)) {
    const target = reference[1];
    if (/^(?:https?:|mailto:|tel:)/.test(target)) continue;
    await stat(path.resolve(outputDirectory, target));
  }

  for (const asset of ["styles.css", "portrait.css", "script.js"]) {
    const content = await readFile(path.join(outputDirectory, asset), "utf8");
    assert.ok(content.split(/\r?\n/).length <= 2, `${asset} should be minified`);
  }
});

test("production portrait uses compact 900px modern formats", async () => {
  const originalSize = (await stat(path.join(sourceDirectory, "assets", "portrait-enhanced.png"))).size;

  for (const [file, format] of [["portrait.avif", "heif"], ["portrait.webp", "webp"], ["portrait.jpg", "jpeg"]]) {
    const target = path.join(outputDirectory, "assets", file);
    const metadata = await sharp(target).metadata();
    assert.equal(metadata.format, format);
    assert.equal(metadata.width, 900);
    assert.equal(metadata.height, 900);
    assert.ok((await stat(target)).size < originalSize);
  }

  await assert.rejects(stat(path.join(outputDirectory, "assets", "portrait-enhanced.png")));
  assert.ok(await totalBytes(outputDirectory) < originalSize, "entire production site should be smaller than the original portrait alone");
});
