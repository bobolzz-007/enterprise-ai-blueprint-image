#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";

const [input, output = "blueprint-4k.png"] = process.argv.slice(2);
if (!input) throw new Error("Usage: node scripts/export-png.mjs <validated.html> [output.png]");

const validation = spawnSync(process.execPath, [path.resolve("scripts/validate-page.mjs"), path.resolve(input)], {
  stdio: "inherit",
  env: process.env
});
if (validation.status !== 0) throw new Error("Layout validation failed; PNG export is forbidden.");

const require = createRequire(import.meta.url);
let chromium;
try {
  ({chromium} = require("playwright"));
} catch {
  throw new Error("Playwright is required for deterministic 4K export.");
}
const browser = await chromium.launch({headless: true});
const page = await browser.newPage({viewport: {width: 1920, height: 1080}, deviceScaleFactor: 2});
await page.goto(pathToFileURL(path.resolve(input)).href);
await page.waitForFunction(() => document.fonts.status === "loaded" && [...document.images].every((img) => img.complete));
await page.screenshot({path: path.resolve(output), type: "png", fullPage: false});
await browser.close();
const size = fs.statSync(path.resolve(output)).size;
console.log(JSON.stringify({output: path.resolve(output), bytes: size, expectedPixels: [3840, 2160]}, null, 2));
