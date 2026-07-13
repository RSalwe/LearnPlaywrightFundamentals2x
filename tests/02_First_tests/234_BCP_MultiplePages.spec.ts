import { chromium } from "playwright";

async function multiTabTest() {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();

    //Tab - 1
    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/login");
    console.log("Tab 1: Dashboard");

    //Tab - 2
    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/login");
    console.log(("Viewer: on login page"));

    await page2.close();
    await page1.close();
    await context.close()
    await browser.close();
}

multiTabTest();