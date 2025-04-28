import { test } from "../utilities/basetest"
import  {expect} from '@playwright/test'

test.describe('Login Page Tests', () => {

test('Login page', async ({hoichoiLoginPage }) => {
  await hoichoiLoginPage.goToPage();
  await expect(hoichoiLoginPage.loginOrSignupLocator()).toBeVisible();
  await expect(hoichoiLoginPage.facebookLoginButtonLocator()).toBeVisible();
  await expect(hoichoiLoginPage.googleLoginButtonLocator()).toBeVisible();
  await expect(hoichoiLoginPage.appleLoginButtonLocator()).toBeVisible();
  await expect(hoichoiLoginPage.emailLoginButtonLocator()).toBeVisible();
});

test('Login with Email', async ({ hoichoiLoginPage }) => {
    const loginSuccessUrls = [
        'https://beta.hoichoi.tv/en',
        'https://beta.hoichoi.tv/en/device-limit-exceeded',
    ]
    await hoichoiLoginPage.loginWithEmail();
    // await expect(hoichoiLoginPage.page).toHaveURL('https://beta.hoichoi.tv/en/device-limit-exceeded');
    await expect(hoichoiLoginPage.page).toHaveURL('https://beta.hoichoi.tv/en');
});

test('Invalid Email Login', async ({ hoichoiLoginPage }) => {
    await hoichoiLoginPage.invalidEmailLogin();
    await expect(hoichoiLoginPage.errorMessageLocator()).toBeVisible();
});


});
