//Verify FROM field at Spicejet.com site 
import { test, expect } from '@playwright/test'
//Below is to close location permission 
test.use(
    {
        permissions: []
    });
test('Selecting Delhi in SpiceJet FROM field', async ({ page }) => {

    await page.goto("https://www.spicejet.com/", { waitUntil: "domcontentloaded", timeout: 60000 });
    //Selecting Delhi at FROM field
    await page.locator("[data-testid='to-testID-origin'] input").fill("de");
    await page.getByText("Delhi", { exact: true }).click();
    //Selecting Bengalure at TO field
    await page.locator("[data-testid='to-testID-destination'] input").fill("ban");
    await page.getByText("Bengaluru", { exact: true }).click();
    await page.pause();
});
