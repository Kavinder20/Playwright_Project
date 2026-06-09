//Step 1 — Login

//- Navigate to /login

//- Fill email field (locate by placeholder you@email.com)

//- Fill password field (locate by label Password)

//- Click the login button (locate by id #login-btn)

//- Assert: link with text Browse Events → is visible (confirms login success)

const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({ page }) => {

    const email = "Kavindersingh588@gmail.com";

    await page.goto("https://eventhub.rahulshettyacademy.com");

    await page.getByPlaceholder("you@email.com").fill(email);
    await page.getByLabel("password").fill("Bravesandy@fus1");
    await page.locator("#login-btn").click();

await expect(page.getByText("Discover & Book")).toBeVisible({ timeout: 10000 });
 await page.getByRole('button', { name: 'Admin' }).click();
await page.getByRole('navigation').getByRole('link', { name: 'Manage Events' }).click();



await page.locator("#event-title-input").fill("Weekend Concert");
await page.getByPlaceholder("Describe the event…").fill("Biggest Weekend concert ever");
await page.getByLabel("city").fill("frankfurt");
await page.getByLabel("venue").fill("Alte-Oper");






//await page.getByLabel('price-($)').fill(80);
//await page.locator("input[id='price-($)']").fill(90);
await page.getByLabel('Price ($)*').fill('90');

await page.getByText('Total Seats*').fill('50');

await page.getByLabel('Event Date & Time').click();

// pick date
await page.getByText('15').click();

// pick time (if visible)
await page.getByText('10:00 AM').click();



})



