import { test, expect } from '@playwright/test'

test("TC#1 - Verify CSS Selectors on Login Form", async ({ page }) => {
    await page.goto("about:blank"); // Replace with actual URL

    //CSS Selectors for the HTML Form
    //h1 - Tag selector
    let heading = page.locator("h1");

    //input[type="text"] - Attribute selector
    let emailField = page.locator('input[type="text"]');

    //input[type="password"] - Attribute selector
    let passwordField = page.locator('input[type="password"]');

    //input[type="checkbox"] - Attribute selector
    let rememberMe = page.locator('input[type="checkbox"]');

    //button:has-text("Sign In") - Text based CSS selector (Playwright specific)
    let signInBtn = page.locator('button:has-text("Sign In")');

    //button:has-text("Sign Up") - Text based CSS selector
    let signUpBtn = page.locator('button:has-text("Sign Up")');

    //form - Tag selector
    let form = page.locator("form");

    console.log("All CSS Selectors created successfully ✅");
})
