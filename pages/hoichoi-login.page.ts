import { Page } from '@playwright/test'


export class HoichoiLoginPage {
  constructor(readonly page: Page) {
  }


  loginOrSignupLocator = () => this.page.getByTestId('dialog-title-login-or-signup')
  facebookLoginButtonLocator = () => this.page.locator('button').filter({ has: this.page.locator('img[alt="Facebook"]')})
  googleLoginButtonLocator = () => this.page.locator('button').filter({ has: this.page.locator('img[alt="Google"]')})
  appleLoginButtonLocator = () => this.page.locator('button').filter({ has: this.page.locator('img[alt="Apple"]')})
  emailLoginButtonLocator = () => this.page.locator('img[alt="email"]')
  emailInputLocator = () => this.page.getByPlaceholder('Enter your email')
  passwordInputLocator = () => this.page.getByPlaceholder('Enter password')
  submitButtonLocator = () => this.page.locator('button').filter({ hasText: 'Continue' })
  errorMessageLocator = () => this.page.getByTestId('login-error')

  async goToPage() {
    await this.page.goto('/login')
  }

  async loginWithEmail() {
    await this.goToPage()
    await this.emailLoginButtonLocator().click()
    await this.emailInputLocator().fill('moloy@hoichoi.tv')
    await this.passwordInputLocator().fill('12345')
    await this.submitButtonLocator().click()
  }

  async invalidEmailLogin() {
    await this.goToPage()
    await this.emailLoginButtonLocator().click()
    await this.emailInputLocator().fill('123@hoichoi.tv')
    await this.passwordInputLocator().fill('12345')
    await this.submitButtonLocator().click()
  }
}
