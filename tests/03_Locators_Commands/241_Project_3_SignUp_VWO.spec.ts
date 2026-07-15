import { test, expect } from '@playwright/test'

test('Verify the signup page with an incorrect email ID', async ({ page }) => {

    await page.goto("https://vwo.com/free-trial/");
    let inputBox = page.locator("#page-v1-step1-email");
    await inputBox.fill("abc123");

    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();

    await page.locator("[data-qa='page-su-submit']").first().click();

    await expect(page.locator("//div[contains(@class,'invalid-reason')]").first()).toContainText("The email address you entered is incorrect.")

});