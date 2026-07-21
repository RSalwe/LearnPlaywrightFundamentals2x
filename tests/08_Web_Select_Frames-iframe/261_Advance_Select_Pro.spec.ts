import { test, expect } from '@playwright/test'

test('Handling Advance Dropdown', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    //① Single — searchable
    await page.locator("#rs-single").click();
    await page.getByText("Selenium").click();

    //② Multi — chips with remove
    await page.locator("#rs-multi").click();
    await page.getByText("JUnit", { exact: true }).click();
    await page.getByText("Cucumber", { exact: true }).click();
    await page.getByRole('button', { name: 'Remove Cucumber' }).click();
    //Clicking outside to close searchbar
    await page.keyboard.press("Escape");

    //③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();
    await page.getByRole('button', { name: 'security' }).click();
    await page.keyboard.press("Escape");

    //④ Grouped — categorised options
    await page.locator("#rs-grouped").click();
    await page.getByText("AWS", { exact: true }).click();
    await page.locator("#rs-grouped").click();
    await page.getByText("Vercel Edge", { exact: true }).click();

    //⑤ Async — fetched on type
    await page.locator("#rs-async").click();
    await page.getByTestId("rs-async-input").fill("be");
    await expect(page.getByTestId("rs-async-menu")).toContainText("Berlin");
    await page.getByRole("option", { name: "Berlin" }).click();
    await page.pause();
});