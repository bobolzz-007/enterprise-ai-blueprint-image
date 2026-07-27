#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const input = process.argv[2];
if (!input) throw new Error("Usage: node scripts/validate-page.mjs <rendered.html>");

let chromium;
try {
  const require = createRequire(import.meta.url);
  ({chromium} = require("playwright"));
} catch {
  throw new Error("Playwright is required for layout validation. Do not deliver an image without running this validator.");
}

const browser = await chromium.launch({headless: true});
const page = await browser.newPage({viewport: {width: 1920, height: 1080}, deviceScaleFactor: 1});
await page.goto(pathToFileURL(path.resolve(input)).href);
await page.waitForFunction(() => document.fonts.status === "loaded");
const report = await page.evaluate(() => {
  const q = (selector) => [...document.querySelectorAll(selector)];
  const box = (el) => el.getBoundingClientRect();
  const overflow = q("[data-validate-box]").filter((el) => el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight)
    .map((el) => el.getAttribute("data-validate-box"));
  const clipped = q("[data-must-visible]").filter((el) => {
    const r = box(el);
    return r.left < 0 || r.top < 0 || r.right > 1920 || r.bottom > 1080 || r.width === 0 || r.height === 0;
  }).map((el) => el.getAttribute("data-must-visible"));
  const title = document.querySelector(".title");
  const tags = document.querySelector(".value-tags");
  const logo = document.querySelector(".logo");
  const intersects = (a, b) => {
    const x = box(a), y = box(b);
    return !(x.right <= y.left || y.right <= x.left || x.bottom <= y.top || y.bottom <= x.top);
  };
  return {
    viewport: [innerWidth, innerHeight],
    scroll: [document.documentElement.scrollWidth, document.documentElement.scrollHeight],
    overflow,
    clipped,
    collisions: [
      title && tags && intersects(title, tags) ? "title/value-tags" : null,
      title && logo && intersects(title, logo) ? "title/logo" : null,
      tags && logo && intersects(tags, logo) ? "value-tags/logo" : null
    ].filter(Boolean),
    counts: {
      leftCapabilities: q(".capability").length,
      middleModules: q(".product").length,
      endpoints: q(".endpoint").length,
      middleGroups: q(".cap-group").length
    },
    missingImages: q("img").filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.src)
  };
});
await browser.close();

const errors = [];
if (report.viewport.join("x") !== "1920x1080") errors.push("logical viewport must be 1920x1080");
if (report.scroll[0] > 1920 || report.scroll[1] > 1080) errors.push(`page overflow: ${report.scroll.join("x")}`);
if (report.counts.leftCapabilities !== 75) errors.push(`expected 75 capabilities, got ${report.counts.leftCapabilities}`);
if (report.counts.middleModules !== 21) errors.push(`expected 21 middle modules, got ${report.counts.middleModules}`);
if (report.counts.middleGroups !== 3) errors.push(`expected 3 middle groups, got ${report.counts.middleGroups}`);
if (report.counts.endpoints !== 5) errors.push(`expected 5 endpoints, got ${report.counts.endpoints}`);
if (report.overflow.length) errors.push(`box overflow: ${report.overflow.join(", ")}`);
if (report.clipped.length) errors.push(`clipped: ${report.clipped.join(", ")}`);
if (report.collisions.length) errors.push(`collisions: ${report.collisions.join(", ")}`);
if (report.missingImages.length) errors.push(`missing images: ${report.missingImages.join(", ")}`);
console.log(JSON.stringify({...report, valid: errors.length === 0, errors}, null, 2));
if (errors.length) process.exit(1);
