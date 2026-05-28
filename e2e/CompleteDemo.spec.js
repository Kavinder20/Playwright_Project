const { test, expect } = require('@playwright/test');

test.only('Browser Context Playwright test', async ({ page }) => {

    const email = "Kavindersingh588@gmail.com"
    const productName = 'ADIDAS ORIGINAL' ;
    const products = page.locator(".card-body");
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Letsmakeitbig@play1");
    await page.locator("[value='Login']").click();

     await page.waitForLoadState('networkidle');

      await page.locator(".card-body b").first().waitFor();

  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);

  const count = await products.count();

  for(let i = 0 ;i<count ;++i){
    const title = await products.nth(i).locator("b").textContent()

    if(title === productName)
    {
        await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
}

    await page.locator(".btn.btn-custom[routerlink*='/dashboard/cart']").click();
    await page.locator("div li").first().waitFor();
     const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  expect(bool).toBeTruthy();
  console.log(bool) ;

  
  await page.locator("text=Checkout").click();

  await page.pause();

    
  

})
