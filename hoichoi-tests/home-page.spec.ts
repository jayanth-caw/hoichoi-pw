import { test } from "../utilities/basetest"
import  {expect} from '@playwright/test'

test.describe('Home Page Tests', () => {
  test('Home Page', async ({ hoichoiHomePage }) => {
    await hoichoiHomePage.goToPage();
    await expect(hoichoiHomePage.page).toHaveTitle('hoichoi - Watch Bengali Movies | Original Web Series');
    await expect(hoichoiHomePage.page).toHaveURL('https://beta.hoichoi.tv/en');
    await expect(hoichoiHomePage.logoLocator()).toBeVisible();
    await expect(hoichoiHomePage.subscribeLocator()).toBeVisible();
    await expect(hoichoiHomePage.loginButtonLocator()).toBeVisible();
    await expect(hoichoiHomePage.searchButtonLocator()).toBeVisible();
    await expect(hoichoiHomePage.homeButtonLocator()).toBeVisible();
    await expect(hoichoiHomePage.moviesButtonLocator()).toBeVisible();
    await expect(hoichoiHomePage.seriesButtonLocator()).toBeVisible();
    await expect(hoichoiHomePage.freeButtonLocator()).toBeVisible();
  });

test('Home Page search functionality', async ({ hoichoiHomePage }) => {
  await hoichoiHomePage.clickSearch();
  await expect(hoichoiHomePage.page).toHaveURL('https://beta.hoichoi.tv/en/search');
});

test('Home to Login Page Navigation', async ({ hoichoiHomePage }) => {
  await hoichoiHomePage.clickLogin();
  await expect(hoichoiHomePage.loginOrSignupLocator()).toBeVisible();
  await expect(hoichoiHomePage.facebookLoginButtonLocator()).toBeVisible();
  await expect(hoichoiHomePage.googleLoginButtonLocator()).toBeVisible();
  await expect(hoichoiHomePage.appleLoginButtonLocator()).toBeVisible();
  await expect(hoichoiHomePage.emailLoginButtonLocator()).toBeVisible();
  
});


});
