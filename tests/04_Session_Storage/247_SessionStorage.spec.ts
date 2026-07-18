import { chromium } from 'playwright';

async function saveAdminSession() {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.vwo.com/#/login");
    await page.waitForTimeout(5000);

    await page.fill("#login-username", "opg73@singleuseemail.site");
    await page.fill("#login-password", "Wingify@4321");
    await page.waitForTimeout(5000);

    await page.click("#js-login-btn");

    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 30000, waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    await context.storageState({ path: "./users-session.json" });
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browser.close();
}
//Below is the normal function
async function saveSession() {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.vwo.com/#/login");
    await page.waitForTimeout(5000);

    await page.fill("#login-username", "opg73@singleuseemail.site");
    await page.fill("#login-password", "Wingify@4321");
    await page.waitForTimeout(5000);

    await page.click("#js-login-btn");

    //Wait for login to actually complete before snapshotting storage
    //otherwise the auth cookies isn't set yet and the saved state is empty

    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    await page.waitForTimeout(2000);

    await context.storageState({ path: "./users-session.json" });
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browser.close();

}
saveSession();
saveAdminSession();