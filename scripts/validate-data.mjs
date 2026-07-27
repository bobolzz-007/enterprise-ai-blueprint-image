#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const input = process.argv[2];
if (!input) throw new Error("Usage: node scripts/validate-data.mjs <blueprint-data.json>");

const data = JSON.parse(fs.readFileSync(path.resolve(input), "utf8"));
const schema = JSON.parse(fs.readFileSync(path.join(root, "assets/blueprint-schema.v2.json"), "utf8"));
const middle = JSON.parse(fs.readFileSync(path.join(root, "assets/middle-column.v1.json"), "utf8"));
const errors = [];
const fail = (message) => errors.push(message);
const cp = (value) => [...String(value ?? "")].length;

for (const key of ["companyName", "companyShortName", "valueChain", "layers", "mappingLabels"]) {
  if (data[key] == null) fail(`missing field: ${key}`);
}
if (cp(data.companyName) > schema.limits.companyName) fail("companyName is too long");
if (cp(data.companyShortName) > schema.limits.companyShortName) fail("companyShortName is too long");
if (!Array.isArray(data.valueChain) || data.valueChain.length !== 5) fail("valueChain must contain exactly 5 tags");

let total = 0;
for (const [layer, contract] of Object.entries(schema.leftMatrix)) {
  if (layer === "totalCapabilities") continue;
  const panels = data.layers?.[layer];
  if (!Array.isArray(panels) || panels.length !== contract.panelCount) {
    fail(`${layer} must contain exactly ${contract.panelCount} panels`);
    continue;
  }
  panels.forEach((panel, panelIndex) => {
    if (cp(panel.title) > schema.limits.panelTitle) fail(`${layer}[${panelIndex}] title is too long`);
    if (!Array.isArray(panel.items) || panel.items.length !== contract.itemsPerPanel) {
      fail(`${layer}[${panelIndex}] must contain exactly ${contract.itemsPerPanel} capabilities`);
      return;
    }
    total += panel.items.length;
    panel.items.forEach((item, itemIndex) => {
      if (cp(item) > schema.limits.capability) fail(`${layer}[${panelIndex}].items[${itemIndex}] is too long`);
    });
  });
}
if (total !== schema.leftMatrix.totalCapabilities) fail(`left capability total must be ${schema.leftMatrix.totalCapabilities}, got ${total}`);

for (const key of ["collaboration", "businessAI", "integration"]) {
  if (!data.mappingLabels?.[key]) fail(`missing mappingLabels.${key}`);
  if (cp(data.mappingLabels?.[key]) > schema.limits.mappingLabel) fail(`mappingLabels.${key} is too long`);
}

const groups = middle.groups ?? middle;
const modules = Array.isArray(groups) ? groups.flatMap((group) => group.modules ?? group.items ?? []) : [];
if (!Array.isArray(groups) || groups.length !== 3) fail("middle-column.v1.json must contain exactly 3 groups");
if (modules.length !== 21) fail(`middle-column.v1.json must contain exactly 21 modules, got ${modules.length}`);

if (errors.length) {
  console.error(JSON.stringify({valid: false, errors}, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({valid: true, totalCapabilities: total, middleModules: modules.length}, null, 2));
