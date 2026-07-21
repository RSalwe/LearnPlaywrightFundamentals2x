import { test, Page, expect, Locator } from '@playwright/test'

async function findRowByName(page: Page, name: string): Promise<Locator> {
    while (true) {
        const row = page.locator('#employees-tbody tr').filter({ hasText: name });
        if (await row.count()) return row;

        const nextButton = page.getByTestId('next-page');
        if (await nextButton.isDisabled()) throw new Error(`No row found for ${name}`);
        await nextButton.click();
    }
}
test('Verify Element using function', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    //Finding person email id and country
    let name: string = "Hannah Becker";
    let row = await findRowByName(page, 'Hannah Becker')
    const email = await row.locator("td[data-col='email']").innerText();
    const country = await row.locator("td[data-col='country']").innerText();
    console.log(name, "has email ID as:", email, "and Country as: ", country);
    await page.waitForTimeout(5000);
});