import { test, expect } from '@playwright/test';
 
test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
  // await page.getbyLabel("Check me out if you Love IceCreams!").click();
   await page.getByLabel("Check me out if you Love IceCreams!").click();
   await page.getByLabel("Gender").selectOption("Female");
   await page.getByLabel("Student").click();


console.log("Visible:", visible);
   //await page.getByText(" The Form has been submitted successfully!.").isVisible();

 
});
