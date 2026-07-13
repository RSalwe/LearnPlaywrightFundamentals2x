import { test, expect } from '@playwright/test'

test("testing two links", async ({ browser }) => {

    let link1Context = await browser.newContext();
    let link1Page = await link1Context.newPage();

    let link2Context = await browser.newContext();
    let link2Page = await link2Context.newPage();

    await link1Page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    console.log("TTA-Cart page is Opened");

    await link2Page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("TTA-Bank page is Opened");

    await link1Page.close();
    await link2Page.close();

});