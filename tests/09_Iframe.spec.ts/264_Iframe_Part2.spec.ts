import { test, expect, FrameLocator, Locator } from '@playwright/test'

test('Verify our first TC', async ({ page }) => {

    await page.goto("https://selectorshub.com/iframe-scenario/");

    let frame1: FrameLocator = page.frameLocator("#pact1");
    let frame2: FrameLocator = frame1.frameLocator("#pact2");
    let frame3: FrameLocator = frame2.frameLocator("#pact3");

    await frame1.locator("#inp_val").fill("Jennie");
    await frame2.locator("#jex").fill("Maria");
    await frame3.locator("#glaf").fill("Playwright");

    await page.pause();

});