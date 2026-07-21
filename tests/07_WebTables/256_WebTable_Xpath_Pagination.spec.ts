import { test, expect } from '@playwright/test'

test('Verify Element using pagination', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    //Finding person email id and country
    let name = "Hannah Becker";
    let row;
    let pageNum = 1;
    //Below code is to find the name and stop finding it once seen
    while (true) {
        row = page.locator("#employees-tbody tr").filter({ hasText: name });
        if (await row.count() > 0) {
            break;
        }
        //Below code is to keep clicking on next button until it is disabled
        const nextButton = page.getByTestId('next-page');
        if (await nextButton.isDisabled()) throw new Error(`No row found for ${name}`); {
            await nextButton.click();
            //Page number should be incremented only after clicking on Next button
            pageNum++;
        }
    }
    //Below code is to get the email and country after finding the specific row
    const email = await row.locator("td[data-col='email']").innerText();
    const country = await row.locator("td[data-col='country']").innerText();
    const role = await row.locator("td[data-col='role']").innerText();
    console.log(name, "is on Page number:", pageNum);
    console.log(name, "has email ID as:", email, "--> Role as: ", role, "--> Country as: ", country);
    await page.waitForTimeout(5000);
});