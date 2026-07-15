import { test, expect } from '@playwright/test'

test('Verify the signup page with an incorrect email ID', async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    await page.getByRole('textbox', { name: "email" }).fill("abc123");

    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: "Create a Free Trial Account" }).click();

    let error_msg = await page.locator("xpath=//div[contains(@class, 'invalid-reason')]").first().textContent();

    //let error_msg = await page.getByText("The email address you entered is incorrect.").textContent();

    expect(error_msg).toContain("The email address you entered is incorrect.");

    await page.waitForTimeout(5000);
});