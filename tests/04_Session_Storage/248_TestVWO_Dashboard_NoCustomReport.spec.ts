import { test, expect } from '@playwright/test'

//Load saved session- already logged in
test.use({
    storageState: "./users-session.json"
});

test("go directly to dashboard - no login", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1227004");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard Loaded - No login needed ✅");
    await page.waitForTimeout(5000);
});
test("go directly to settings - no login", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");
    await expect(page).toHaveURL(/settings/);
    console.log("Setting Loaded - No login needed ✅");
    await page.waitForTimeout(5000);
});