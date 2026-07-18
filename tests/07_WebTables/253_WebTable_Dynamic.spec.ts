import { test, expect } from '@playwright/test'

test('Handling web table using Dynamic x-path', async ({ page }) => {

    await page.goto("https://awesomeqa.com/webtable1.html");

    const rows = page.locator("table[summary='Sample Table'] tbody tr");
    const rowsCount = await rows.count();
    const row1 = "//table[@summary='Sample Table']/tbody/tr[";
    const row2 = "]";
    for (let j = 1; j <= rowsCount; j++) {
        const finalRow = `${row1}${j}${row2}`;
        const row = await page.locator(finalRow).innerText();
        console.log(row);

    }
    console.log(rows);
    console.log(rowsCount);

    for (let i = 0; i <= rowsCount; i++) {
        const fields = await rows.nth(i).locator('td').allInnerTexts();
        console.log(`[Row ${i + 1}]:`, fields);

    }
});
