import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.locator('app-card').filter({ hasText: 'Blackberry $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.getByText('Checkout ( 2 ) (current)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).click();


const countryInput = page.getByRole('textbox', { name: 'Please choose your delivery' });

// ✅ IMPORTANT: use type instead of fill
await countryInput.click();
await countryInput.type('ind');

const indiaOption = page.locator('.suggestions li a', { hasText: 'India' });

await indiaOption.first().waitFor({ state: 'visible' });
await indiaOption.first().click();


await countryOption.waitFor({ state: 'visible' });
await countryOption.click();
  await page.getByText('I agree with the term &').click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByText('Please choose your delivery').click();
  await expect(page.locator('app-checkout')).toContainText('Please choose your delivery location. Then click on purchase button');
  await expect(page.getByText('× Success! Thank you! Your')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Please choose your delivery' })).toHaveValue('India');
});