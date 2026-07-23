import { test, expect, FrameLocator } from '@playwright/test'

test('Handling single frame', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    let vehicleName: FrameLocator = await page.frameLocator("#frame-one");

    await vehicleName.locator("#RESULT_TextField-1").fill("Hynundai i20");
    await vehicleName.locator("#RESULT_TextField-2").fill("Rupesh Salwe");
    await vehicleName.locator("#RESULT_TextField-3").fill("MH-31-AS-1234");
    await vehicleName.locator("#RESULT_RadioButton-1").selectOption("SUV");
    await vehicleName.locator("#RESULT_TextField-4").fill("2026");
    await vehicleName.locator("#RESULT_TextArea-1").fill("This is a very good car");
    await vehicleName.getByText("Submit registration", { exact: true }).click();

    let output = await vehicleName.locator("#vehicle-output").innerText();
    console.log(output);
    await page.pause();

});