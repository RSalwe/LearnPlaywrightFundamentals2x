import { test, expect } from '@playwright/test'

test("Simple goto - uses load by default", async ({ page }) => {
    //No waituntil specified - defaults to "load"
    await page.goto("https://example.com");

    let page_title = await page.title();
    console.log("Title: ", page_title);

    await expect(page).toHaveURL("https://example.com");
    console.log("URL Verified ✅");
});

test("navigate with custom referer", async ({ page }) => {
    //Tell the server that user came from Google

    await page.goto("https://app.com/landing", {
        referer: "https://google.com/search?q=testing+academy"
    });

    console.log("Page loaded with google as referer");
    console.log("URL: ", page.url());

});