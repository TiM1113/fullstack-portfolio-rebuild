#!/usr/bin/env node
/**
 * Capture full-page screenshots of every route in both light and dark themes.
 * Output: docs/redesign-handoff/{viewport}-{theme}/{route}.png
 *
 * Usage: node scripts/capture-screenshots.mjs
 * Prereq: dev server must be running at SCREENSHOT_BASE_URL or http://localhost:3000
 */

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const BASE = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:3000";
const ROUTES = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/blog", name: "blog" },
  { path: "/projects", name: "projects" },
  { path: "/stack", name: "stack" },
];
const PRESETS = [
  {
    name: "desktop",
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  },
  {
    name: "mobile",
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
  },
];
const OUT_ROOT = "docs/redesign-handoff";

async function setTheme(page, theme) {
  // Persist via localStorage so it survives navigation (matches theme-provider key)
  await page.evaluate((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch {}
    const html = document.documentElement;
    if (t === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
    html.style.colorScheme = t;
  }, theme);
}

async function captureRoute(page, route, theme, outDir) {
  const url = BASE + route.path;
  await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
  // Re-apply theme on every page (theme-provider may rehydrate from localStorage)
  await setTheme(page, theme);
  // Allow a frame for theme rehydration animations to settle
  await page.waitForTimeout(400);
  // Force any lazy-loaded images to load by scrolling, then return to top
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 200;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          setTimeout(resolve, 300);
        }
      }, 80);
    });
  });
  await page.waitForTimeout(200);
  const outPath = join(outDir, `${route.name}.png`);
  await page.screenshot({
    path: outPath,
    fullPage: true,
    animations: "disabled",
    timeout: 60_000,
  });
  console.log(`  ✓ ${outPath}`);
}

async function main() {
  for (const preset of PRESETS) {
    for (const theme of ["dark", "light"]) {
      const outDir = join(OUT_ROOT, `${preset.name}-${theme}`);
      await mkdir(outDir, { recursive: true });
    }
  }

  const browser = await chromium.launch();
  try {
    for (const preset of PRESETS) {
      const context = await browser.newContext({
        viewport: preset.viewport,
        deviceScaleFactor: preset.deviceScaleFactor,
        colorScheme: "dark",
      });
      const page = await context.newPage();

      for (const theme of ["dark", "light"]) {
        console.log(`\n=== Capturing ${preset.name.toUpperCase()} ${theme.toUpperCase()} theme ===`);
        await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
        await setTheme(page, theme);

        const outDir = join(OUT_ROOT, `${preset.name}-${theme}`);
        for (const route of ROUTES) {
          await captureRoute(page, route, theme, outDir);
        }
      }

      await context.close();
    }
  } finally {
    await browser.close();
  }
  console.log("\nDone. Files in docs/redesign-handoff/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
