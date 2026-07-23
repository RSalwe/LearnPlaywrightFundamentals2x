import { test, expect, FrameLocator, Locator } from '@playwright/test'

test('Handling frame set', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    let mainFrame: FrameLocator = await page.frameLocator('[name="main"]');

    let headerText = mainFrame.locator('h2').innerText();
    console.log((headerText));

    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log("Total number of frames are:" + allFrames.length);

    for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ':', await frame.getAttribute('src'));
    }

    //Registering for side frame
    let sideFrame: FrameLocator = await page.frameLocator('[name="side"]');
    await sideFrame.getByTestId("side-link-overview").click();

    await page.pause();

});