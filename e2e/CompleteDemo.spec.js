const { test, expect } = require('@playwright/test');

test.only('Browser Context Playwright test', async ({ page }) => {

    const email = "Kavindersingh588@gmail.com"
    const productName = 'ADIDAS ORIGINAL' ;
    const products = page.locator(".card-body");
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Letsmakeitbig@play1");
    await page.locator("[value='Login']").click();

     await page.waitForLoadState('networkidle'); // waits for all network requests

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

await page.locator("input[placeholder*='Select Country']").pressSequentially("ger", {delay:100}) ;
const  dropDown = await page.locator(".ta-results");
await dropDown.waitFor();

const optionsCount = await dropDown.locator("button").count();
for(let i = 0; i<optionsCount ; i++)
{

  const text = await dropDown.locator("button").nth(i).textContent();
  
  if(text.trim() === 'Germany')
  {
    await dropDown.locator("button").nth(i).click();
     break ;
  }
   
<span _ngcontent-xjv-c37="" class="ng-star-inserted" xpath="1"><i _ngcontent-xjv-c37="" class="fa fa-search"></i> Germany</span>
}
//expect(page.locator(".user__name [type*='text']").first()).toHaveText(email);

//await page.locator(".action__submit").click();
//await page.locator(".hero-primary").toHaveText("Thankyou for the order");

    expect(page.locator(".user__name  [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText("  Thankyou for the order. ");


    
  

})
