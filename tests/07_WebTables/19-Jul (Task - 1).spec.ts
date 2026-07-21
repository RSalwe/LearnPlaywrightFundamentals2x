import { test, expect } from '@playwright/test'

test('Get Yoshi Tannamuri country', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    let name = "Yoshi Tannamuri";
    //table[@id='companies-table']/tbody/tr[1]/td[2]");
    // const firstPath = "//table[@id='companies-table']/tbody/tr["
    // const secondPath = "]/td[";
    // const thirdPath = "]";

    // const row = await page.locator("//table[@id='companies-table']/tbody/tr").count();
    // const column = await page.locator("//table[@id='companies-table']/tbody/tr[1]/td").count();

    // for (let i = 1; i <= row; i++) {
    //     for (let j = 1; j <= column; j++) {
    //         const countrypath = `${firstPath}${i}${secondPath}${j}${thirdPath}`;
    //         const data = await page.locator(countrypath).innerText();
    //         // console.log(data);
    //         if (data.includes("Yoshi Tannamuri")) {
    //             const countryText = `${countrypath}/following-sibling::td`
    //             const country = await page.locator(countryText).innerText();
    //             console.log(data, "counrtry is: ", country);

    //             // const companyText = `${countrypath}/preceding-sibling::td`
    //             // const company = await page.locator(companyText).innerText();
    //             // console.log(data, "company is: ", company);
    //         }
    //     }
    // }
    // await page.pause();

    //Another way as below
    const row = page.locator("#companies-table tbody tr").filter({ hasText: name });
    const country = await row.locator('td').last().innerText();
    console.log(name, "country is", country);

});
