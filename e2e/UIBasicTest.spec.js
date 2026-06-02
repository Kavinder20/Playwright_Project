const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({ browser }) => {


    const context = await browser.newContext();
    const page = await context.newPage();
    
  const userName = page.locator('#username');
  const signIn = page.locator("#submit-login");

    await page.goto("https://practice.expandtesting.com/login");

    console.log(await page.title());

    await userName.fill("practicce");
    await page.locator("[type='password']").fill("SuperSecretPassword!");
    await signIn.click();

    console.log(await page.locator("#flash").textContent());

    await userName.fill("");
    await userName.fill("practice");
    await signIn.click();
    await page.locator("#contentbody").textContent();
    console.log(await page.locator("#contentbody").textContent());
});
test('My Google Test', async ({ page }) => {

  await page.goto('https://google.com');

console.log( await page.title());
await expect(page).toHaveTitle("Google");

});