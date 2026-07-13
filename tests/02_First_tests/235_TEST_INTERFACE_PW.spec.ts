//Below is the much cleaner way to write the code than previous one
import { test, expect } from '@playwright/test'

test("login page", async ({ page }) => {
    //'page' is automatically created for you
    //playwright already launched a browser, created a context, and opened this page

    await page.goto("https://app.vwo.com/#login");
    await page.fill("#usermame", "admin");
    await page.fill("#password", "pass123");
    await page.click("#login-btn");

    await expect(page).toHaveURL("/dashboard");
});
test("another test", async ({ page }) => {
    //This get a fresh page in a fresh context
    //zero shared state with the test above
    //each test is completely isolated

    await page.goto("https://app.com/#signup");
    await expect(page).toHaveTitle("Sign Up");
});