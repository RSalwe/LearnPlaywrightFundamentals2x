import { test, expect } from '@playwright/test'

test('Verify Element by Filter', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    await page.locator("//td[text()='Rohan.Mehta']/preceding-sibling::td//input[@type='checkbox']").click();

    //Below is xpath pseudo
    await page
        .locator("tr:has(td:text('Neha.Patel'))")
        .locator('td')
        .first()
        .click();

    const city = await page.locator("//td[text()='Rohan.Mehta']//following-sibling::td[3]").innerText();
    console.log("Rohan Mehta is in: ", city, "City");

    const project = await page.locator("//td[text()='Rohan.Mehta']//following-sibling::td[4]").innerText();
    console.log("Rohan Mehta is in: ", project, "Project");
    await page.waitForTimeout(5000);
});