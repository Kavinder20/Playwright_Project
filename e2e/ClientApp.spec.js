const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({ page}) =>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login ");
    await page.locator("#userEmail").fill("Kavindersingh588@gmail.com");
        await page.locator("#userPassword").type("Letsmakeitbig@play1");
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle');

        const titles = await page.locator(".card-body b").allTextContents();
        console.log(titles);

        const documentLink = page.locator("[href*='techsmarthire']");
        await expect(documentLink).toHaveAttribute("class", "blinkingText");
});