//https://app.vwo.com/#login

import { test, expect } from '@playwright/test'

test("TC#1 - Verify app.vwo.com is not working and gives you an error with lazy strict and auto wait concept", async ({ page }) => {
    await page.goto("https://app.vwo.com/");

    //Default Locators
    //ID, name, className, tag.., Custom Locator(Via CSS Selector)

    //CSS Selector -> Browser - CSS Engine Help you to find the element
    //by using the default locators
    //id => #id
    //className => .
    //name => [name= "value"]
    //tag => [tag]

    //<input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID"
    // >
    let userNameField = page.locator("#login - username");
    let passWordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    //NOW playwright finds the element and acts (auto-wait)
    await userNameField.fill("admin@gmail.com");
    await passWordField.fill("welcome123");
    await loginButton.click();
    console.log("All Actions completed ✅");

    let errorMessage = page.locator("#js-notification-box-msg");
    await expect(errorMessage).toContainText("Your email, password, IP address or location did not match");










})
