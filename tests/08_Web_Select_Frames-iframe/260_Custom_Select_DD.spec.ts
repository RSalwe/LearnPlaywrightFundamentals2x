import { test, expect } from '@playwright/test'

test('Handling Custom DropDown', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    //Clicking on button
    await page.getByTestId("lang-trigger").click();
    await page.getByRole("option", { name: "JavaScript" }).click();

    await page.getByTestId("framework-trigger").click();
    await page.getByText("Angular", { exact: true }).click();

    await page.getByTestId("experience-trigger").click();
    await page.getByRole("option", { name: "Principal (10+ years)" }).click();

    await page.pause();

});