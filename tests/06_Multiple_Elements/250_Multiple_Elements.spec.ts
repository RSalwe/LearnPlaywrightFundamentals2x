import { test, expect } from '@playwright/test'

test('Handling multiple elements on web page', async ({ page }) => {

    //Navigating to page
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    //Find the locator which gives all the elements and text
    const rightPannelElementList: string[] = await page.locator("a.list-group-item").allInnerTexts();
    console.log(rightPannelElementList.length);

    //Loop through it and find the one which we want to click
    for (const rightElement of rightPannelElementList) {
        if (rightElement === "Downloads") {
            await page.getByText(rightElement).first().click();
        }
    }
    //Another way to print all elements using href
    const rightPannelLinks = await page.locator("a.list-group-item").all();
    for (const linkText of rightPannelLinks) {
        console.log(await linkText.getAttribute("href"));
    }
    //page.pause();
});
