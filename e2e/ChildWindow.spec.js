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

test('@Child windows hadl', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
      await page.goto("https://rahulshettyacademy.com/client/#/auth/login ");
      await page.locator("#userEmail").fill("Kavindersingh588@gmail.com");
      await page.locator("#userPassword").type("Letsmakeitbig@play1");
      await page.locator("[value='Login']").click();
      const documentLink = page.locator("[href*='techsmarthire']");
    
      const [newPage] = await Promise.all(
      [
        context.waitForEvent('page'),
        documentLink.click(),
    ])
    //text =  await newPage.locator("div[class='text-lg md:text-xl text-subtle font-medium max-w-3xl mx-auto mb-4 leading-relaxed']").allTextContents();
   //console.log(text);

   await newPage.waitForLoadState();
   const text = await newPage.locator(".text-lg").allTextContents();
   console.log(text);


})