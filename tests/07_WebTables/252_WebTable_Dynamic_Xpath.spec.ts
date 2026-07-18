import { test, expect } from '@playwright/test'

test('Handling web table using Dynamic x-path', async ({ page }) => {

    //Go to the link of the web table
    //find the Helen Bennett
    //use the for loop to find the following siblings
    await page.goto("https://awesomeqa.com/webtable.html");

    //table[@id='customers']/tbody/tr[5]/td[2]

    //5 i.e. i - 7 -> 1 to 7 -> as first row is heading then it will actually be 2 to 7
    //]/td[
    //2 i.e. j -> 1, 2, 3 (no of columns)

    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const columns = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            const dynamicxpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            //console.log(dynamicxpath);
            const data = await page.locator(dynamicxpath).innerText();
            console.log(data);
            if (data.includes('Helen Bennett')) {
                const countrypath = `${dynamicxpath}/following-sibling::td`;
                const countryText = await page.locator(countrypath).innerText();
                console.log("********");
                console.log(data + "is in" + countryText);
            }
        }
    }
    await page.pause();
});




