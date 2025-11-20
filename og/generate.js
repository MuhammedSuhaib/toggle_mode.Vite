import { chromium } from "playwright";
import fs from "fs";

async function run() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://muhammedsuhaib.github.io/toggle_mode.Vite/");

    await page.setViewportSize({ width: 1200, height: 630 });

    const buffer = await page.screenshot();
    fs.writeFileSync("public/og.png", buffer);

    await browser.close();
}

run();
