import { test, expect } from '@playwright/test'
//Below is to close location permission 
test.use(
    {
        permissions: []
    });
test('Hover Over Spicejet.com Add-On', async ({ page }) => {

    await page.goto("https://www.spicejet.com/", { waitUntil: 'domcontentloaded', timeout: 60000 });
    //For getbytext always use exact: true as below
    await page.getByText("Add-ons", { exact: true }).hover();
    await page.getByTestId("test-id-SpiceMax").click();
    await page.pause();
});