import { test, expect } from '@playwright/test'

test('Handling Context Menu', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.getByTestId("ctx-target").click({ button: "right" });

    const allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(allOptions);

    await page.pause();
    await page.getByText("Cut", { exact: true }).click();


});