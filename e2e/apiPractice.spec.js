const { test, expect, request } = require('@playwright/test');

test('Practice API login', async () => {

  const apiContext = await request.newContext();

  const loginPayLoad = {
    userEmail: "anshika@gmail.com",
    userPassword: "Iamking@000"
  };

  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: loginPayLoad
    }
  );

  const responseBody = await loginResponse.json();

console.log(responseBody);

const token = responseBody.token;

console.log("Token is:", token);

expect(token).toBeTruthy();

});