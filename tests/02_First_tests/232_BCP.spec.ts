import { chromium, Browser, BrowserContext, Page } from "playwright";
import { expect } from "playwright/test";

async function run() {
    //LEVEL 1: Launch Browser - heaviest operation, do it once
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser Launched", browser);

    //LEVEL 2: Create Context - fresh session, isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log("Context created", context1);

    let context2: BrowserContext = await browser.newContext();
    console.log("Context created", context2);

    //LEVEL 3: Open Page - a tab inside the context
    let page1: Page = await context1.newPage();
    console.log("Page Opened");

    await page1.goto("https:app.vwo.com");
    console.log("Title: ", await page1.title());

    //Clean up - reverse order
    // await page1.close();
    // await context1.close();
    // await context2.close();
    // await browser.close();
}
run();