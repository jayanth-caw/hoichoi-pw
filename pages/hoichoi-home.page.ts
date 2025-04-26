import { Page } from '@playwright/test'


export class HoichoiHomePage {
  constructor(readonly page: Page) {
  }


  searchButtonLocator = () => this.page.locator('a').filter({ hasText: 'Search' })
  loginButtonLocator = () => this.page.getByTestId('button-login')
  homeButtonLocator = () => this.page.locator('a').filter({ hasText: 'Home' })
  moviesButtonLocator = () => this.page.locator('a').filter({ hasText: 'Movies' })
  seriesButtonLocator = () => this.page.locator('a').filter({ hasText: 'Shows' })
  freeButtonLocator = () => this.page.locator('a').filter({ hasText: 'Free' })
  logoLocator = () => this.page.getByTestId('header-logo')
  subscribeLocator = () => this.page.locator('a').filter({ hasText: 'Subscribe' })
  loginOrSignupLocator = () => this.page.getByTestId('dialog-title-login-or-signup')
  facebookLoginButtonLocator = () => this.page.locator('button').filter({ has: this.page.locator('img[alt="Facebook"]')})
  googleLoginButtonLocator = () => this.page.locator('button').filter({ has: this.page.locator('img[alt="Google"]')})
  appleLoginButtonLocator = () => this.page.locator('button').filter({ has: this.page.locator('img[alt="Apple"]')})
  emailLoginButtonLocator = () => this.page.locator('img[alt="email"]')

  async goToPage() {
    await this.page.goto('/')
  }

  async clickSearch() {
    await this.goToPage()
    await this.searchButtonLocator().click()
  }

  async clickLogin() {
    await this.goToPage()
    await this.loginButtonLocator().click()
  }

}
