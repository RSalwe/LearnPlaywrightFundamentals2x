import { test, expect } from '@playwright/test'

test('Verify Element by Filter', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPannelElementList = page.locator('a.list-group-item').filter({ hasText: 'Login' });
    await rightPannelElementList.click();
    await page.waitForTimeout(5000);

    //Order vs Order History
    // /^Order/ --> Starts with Order

    const accountLinks = page.locator('a.list-group-item');
    await expect(accountLinks).toHaveCount(13);

    const privacyLink = page.locator('footer a').filter({ hasText: "Privacy Policy" });
    await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');

});