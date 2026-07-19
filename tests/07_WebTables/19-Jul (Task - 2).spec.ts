import { test, expect } from '@playwright/test'

test('Get Mia Hoffmann Email', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name = "Mia Hoffmann";
    let row;
    while (true) {
        row = page.locator("#employees-tbody tr").filter({ hasText: name });
        if (await row.count()) {
            break;
        }
        const next = page.getByTestId("next-page");
        if (await next.isDisabled()) throw new Error("No Row Found");
        await next.click();

    }
    const email = await row.locator('td[data-col="email"]').innerText();
    console.log(name, "Email ID is:", email);
    await page.waitForTimeout(5000);
});