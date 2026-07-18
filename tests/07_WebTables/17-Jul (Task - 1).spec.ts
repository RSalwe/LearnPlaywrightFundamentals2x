import { test, expect } from '@playwright/test'

test('Verify student login and url contents', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.locator("//input[@id='email']").fill("qa_tester@gmail.com");
    await page.locator("//input[@id='password']").fill("QATester123");
    await page.locator("//input[@type='checkbox']").click();
    await page.locator("//button[@class='login-btn']").click();

    page.locator("//button[@class='login-btn']").click();

    const pageURL = page.url();

    //verifying URL content - without if loop
    // await expect(page).toHaveURL(/email|password/);

    //verifying URL content - with if loop
    if (pageURL.includes("email") && pageURL.includes("password")) {
        console.log("User has been logged In!!");
    }
});


