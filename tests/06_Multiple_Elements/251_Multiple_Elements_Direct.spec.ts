import { test, expect } from '@playwright/test'

test('Handling multiple elements on web page Directly', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    //getByRole, getByText are not unique
    await page.pause();
    await page.getByTestId(('forgotten-password-link')).click();
    await page.pause();
});