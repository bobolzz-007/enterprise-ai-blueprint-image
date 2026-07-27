#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const [input, output = "blueprint.html"] = process.argv.slice(2);
if (!input) throw new Error("Usage: node scripts/render-html.mjs <blueprint-data.json> [output.html]");

const validation = spawnSync(process.execPath, [path.join(here, "validate-data.mjs"), path.resolve(input)], {stdio: "inherit"});
if (validation.status !== 0) process.exit(validation.status ?? 1);

const data = JSON.parse(fs.readFileSync(path.resolve(input), "utf8"));
const middle = JSON.parse(fs.readFileSync(path.join(root, "assets/middle-column.v1.json"), "utf8"));
const template = fs.readFileSync(path.join(root, "assets/template/blueprint.html"), "utf8");
const assetRoot = pathToFileURL(path.join(root, "assets") + path.sep).href;
const html = template
  .replace("__BLUEPRINT_DATA__", JSON.stringify(data).replaceAll("<", "\\u003c"))
  .replace("__MIDDLE_DATA__", JSON.stringify(middle).replaceAll("<", "\\u003c"))
  .replaceAll("__ASSET_ROOT__", assetRoot);
fs.writeFileSync(path.resolve(output), html);
console.log(path.resolve(output));
