//Handling Hover-Over in TTA site
import { test, expect } from '@playwright/test'

test('Handling Hover-Over in TTA site on Add-ons', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu", { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.getByTestId("nav-add-ons").first().hover();
    let totalAddOns = await page.getByTestId("nav-add-ons").locator("a").allTextContents();
    console.log(totalAddOns);
    await page.getByTestId("test-id-Wifi").click();
    //closing hover-over
    await page.mouse.move(0, 0);
    await page.mouse.click(0, 0);
    await page.pause();
});