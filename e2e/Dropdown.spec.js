const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({ page}) =>
{

   // await page.goto("https://practice.expandtesting.com/dropdown");
   await page.goto("https://practice.expandtesting.com/checkboxes");
//const dropdown = page.locator("#dropdown");
//await dropdown.selectOption("Option 2");



//const countrydropdown = page.locator("#country");
//await countrydropdown.selectOption("France");

await page.locator("label[for='checkbox1']").click();
console.log(await page.locator("label[for='checkbox1']").isChecked());

await expect(page.locator("label[for='checkbox1']")).toBeChecked();




});