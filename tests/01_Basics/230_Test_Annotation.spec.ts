import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
    //page = fixture (injected by PW)
});
//skip test
test.skip('skipped test', async ({ page }) => {
    //Only run this test
});
//Mark as failing
test.fail('failed test', async ({ page }) => {
    //Ths test is failed
});
//Slow test  -> (3x Timeout)
test.slow('slow test', async ({ page }) => {
    //Ths test is slow
});
//Conditional skip
test('conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox')
})
