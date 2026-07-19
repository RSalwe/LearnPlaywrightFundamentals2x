import { test } from '@playwright/test'

test('Verify OrageHRM Webtable and delete the terminated employee', async ({ page }) => {

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

    await page.locator("//input[@name='username']").fill("admin");
    await page.locator("//input[@name='password']").fill("Awesomeqa@4321");

    await page.locator("//button[@type='submit']").click();

    await page.waitForTimeout(10000);

    //await expect(page.locator("//div[@class='oxd-table-body']//div[@role='row']").first()).toBeVisible();
    const getRow = page.locator("div[role='row']");
    const rowsCount = await getRow.count();

    for (let i = 0; i < rowsCount; i++) {
        const cell = getRow.nth(i).locator("div[role='cell']");
        const row_Text = await cell.innerText();
        console.log(row_Text);

        if (row_Text.includes("Terminated")) {
            await page.getByRole('button').click();
            break;
        }
    }
    await page.waitForTimeout(10000);


});