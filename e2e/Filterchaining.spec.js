const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Webst Client App login', async ({ page }) => {
 
    const email = "anshika@gmail.com" ;
  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.locator("#userPassword").fill("Iamking@000");
  //await page.getByPlaceholder("enter your passssword").fill("Iamking@000");
  await page.getByRole('button', {name: "Login"}).click();

    await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();

  await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
  .getByRole('button', {name: "Add to Cart"}).click();

    await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
    //await page.pause();

    await page.getByRole('button',{name:"Cart"}).click();

    await page.locator("div li").first().waitFor();

    await page.getByRole("button",{name :"Checkout"}).click();

     await page.getByPlaceholder("Select Country").pressSequentially("ind");
     await page.getByRole("button",{name :"India"}).nth(1).click();

     await page.getByText("PLACE ORDER").click();

     
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
}
   
)


  