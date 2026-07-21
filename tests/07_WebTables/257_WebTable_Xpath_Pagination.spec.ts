import { test, expect } from '@playwright/test'

test('Get all email on page', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const pageCount = 3;
    const email: string[] = [];

    for (let p = 1; p <= pageCount; p++) {
        await page.getByTestId(`page-${p}`).click();
        const emails = await page.locator('#employees-tbody tr td[data-col="email"]').allInnerTexts();
        email.push(...emails);
    }
    console.log(email);
    await page.waitForTimeout(5000);

});