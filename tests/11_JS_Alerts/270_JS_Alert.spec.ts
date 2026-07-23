import { test, expect } from '@playwright/test'

test('JS Alert Accept 1', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //Registering the dialog handler before triggering the trigger
    //*********Registering for JS Alert*******
    //     page.once('dialog', async dialog => {
    //     console.log('Alert type:', dialog.type());
    //     console.log('Alert message:', dialog.message());
    //     expect(dialog.message()).toBe('I am a JS Alert');
    //     await dialog.accept();
    // });
    //await page.getByRole("button", { name: "Click for JS Alert" }).click();
    // await page.getByText('Click for JS Alert').click();
    // await page.locator('//button[text()="Click for JS Alert"]').click();
    // await page.locator('button', { hasText: "Click for JS Alert" }).click();

    //*******Registering for JS Confirm*******
    //     page.once('dialog', async dialog => {
    //     console.log('Alert type:', dialog.type());
    //     expect(dialog.type()).toBe('Confirm');
    //     console.log('Alert message:', dialog.message());
    //     expect(dialog.message()).toBe('I am a JS Confirm');
    //     await dialog.accept();
    //     await dialog.dismiss();
    // });
    // await page.pause();
    // await page.getByRole("button", { name: "Click for JS Confirm" }).click();
    // await page.pause();

    //*******Registering for JS Prompt********
    const input = "Hello Playwright Tester";
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.defaultValue()).toBe('');
        await dialog.accept(input);
        //await dialog.dismiss();
    });
    await page.getByRole("button", { name: "Click for JS Prompt" }).click();
});