import { readdir, readFile, rm, mkdir, copyFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { minify as minifyHtml } from "html-minifier-terser";
import { transform as minifyCss } from "lightningcss";
import sharp from "sharp";
import { minify as minifyJs } from "terser";

const toolDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(toolDirectory, "..", "..");
const sourceDirectory = path.join(repositoryRoot, "site");
const outputDirectory = path.join(repositoryRoot, "dist");
const portraitSource = "assets/portrait-enhanced.png";
const generatedPortraits = new Set([
  portraitSource,
  "assets/portrait.avif",
  "assets/portrait.webp",
  "assets/portrait.jpg",
]);

if (path.dirname(outputDirectory) !== repositoryRoot || path.basename(outputDirectory) !== "dist") {
  throw new Error("Refusing to clean an unexpected output directory.");
}

async function buildDirectory(source, destination, relative = "") {
  await mkdir(destination, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const outputPath = path.join(destination, entry.name);
    const relativePath = path.posix.join(relative, entry.name);

    if (entry.isDirectory()) {
      await buildDirectory(sourcePath, outputPath, relativePath);
      continue;
    }

    if (generatedPortraits.has(relativePath)) continue;

    const extension = path.extname(entry.name).toLowerCase();
    if (extension === ".html") {
      const html = await readFile(sourcePath, "utf8");
      const output = await minifyHtml(html, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        decodeEntities: true,
        keepClosingSlash: false,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        sortAttributes: false,
        sortClassName: false,
        useShortDoctype: true,
      });
      await writeFile(outputPath, output);
      continue;
    }

    if (extension === ".css") {
      const css = await readFile(sourcePath);
      const { code } = minifyCss({ filename: entry.name, code: css, minify: true });
      await writeFile(outputPath, code);
      continue;
    }

    if (extension === ".js") {
      const javascript = await readFile(sourcePath, "utf8");
      const result = await minifyJs(javascript, {
        compress: true,
        mangle: true,
        format: { comments: false },
      });
      if (!result.code) throw new Error(`Minification produced no output for ${relativePath}.`);
      await writeFile(outputPath, result.code);
      continue;
    }

    await copyFile(sourcePath, outputPath);
  }
}

async function buildPortrait() {
  const input = path.join(sourceDirectory, portraitSource);
  const output = path.join(outputDirectory, "assets");
  await mkdir(output, { recursive: true });
  const portrait = sharp(input).rotate().resize(900, 900, { fit: "cover" });

  await Promise.all([
    portrait.clone().avif({ quality: 60, effort: 6 }).toFile(path.join(output, "portrait.avif")),
    portrait.clone().webp({ quality: 85, effort: 6, smartSubsample: true }).toFile(path.join(output, "portrait.webp")),
    portrait.clone().jpeg({ quality: 88, mozjpeg: true, progressive: true }).toFile(path.join(output, "portrait.jpg")),
  ]);
}

await rm(outputDirectory, { recursive: true, force: true });
await buildDirectory(sourceDirectory, outputDirectory);
await buildPortrait();

console.log(`Built optimized portfolio at ${outputDirectory}`);
