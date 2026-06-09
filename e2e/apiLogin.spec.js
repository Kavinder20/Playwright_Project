const { test, request, expect } = require('@playwright/test');
const { ApiUtils } = require('./utils/ApiUtils');

const loginPayLoad = {
  userEmail: "anshika@gmail.com",
  userPassword: "Iamking@000"
};

test('API login and open app', async ({ page }) => {

  const apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext, loginPayLoad);

  const token = await apiUtils.getToken();

  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);

  await page.goto('https://rahulshettyacademy.com/client');

  await expect(page).toHaveTitle(/Let's Shop/);
});