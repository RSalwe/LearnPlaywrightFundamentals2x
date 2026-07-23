import { test, expect } from '@playwright/test'

test('Handling Drag and Drop', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

    const column_A = page.locator("#column-a");
    const column_B = page.locator("#column-b");
    await page.pause();
    await column_A.dragTo(column_B);
});


