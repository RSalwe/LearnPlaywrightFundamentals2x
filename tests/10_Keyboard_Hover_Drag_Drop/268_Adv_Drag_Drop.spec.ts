import { test, expect, Locator } from '@playwright/test'

test('Handling Advance Drag and Drop', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

    //1st---Way
    // const item_A = page.locator("#card-write-spec");
    // const item_B = page.locator("[data-status='in-progress']");
    // item_A.dragTo(item_B);

    //2nd---Way
    // await page.locator("#card-review-pr-21").dragTo(page.locator("[data-status='in-progress']"));
    // await page.locator("#card-review-pr-21").dragTo(page.locator("[data-status='review']"));

    //3rd---Way
    //Manual mouse path - for finicky DnD Libraries
    let source: Locator = page.locator("#card-write-spec");
    const sBox = (await source.boundingBox())!;

    let target: Locator = page.locator("[data-status='review']");
    const tBox = (await target.boundingBox())!;

    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 1 });
    await page.mouse.up();
    await page.pause();

});