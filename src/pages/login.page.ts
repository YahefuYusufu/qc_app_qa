import { BasePage } from './base.page';
import { LoginSelectors } from '../constants/selectors/login.selectors';
import { Timeouts } from '../constants';

class LoginPageClass extends BasePage {
  /**
   * Enter email address
   */
  async enterEmail(email: string): Promise<void> {
    await this.type(LoginSelectors.EMAIL_INPUT, email);
  }

  /**
   * Enter password
   */
  async enterPassword(password: string): Promise<void> {
    await this.type(LoginSelectors.PASSWORD_INPUT, password);
  }

  /**
   * Tap sign in button
   */
  async tapSignIn(): Promise<void> {
    await this.click(LoginSelectors.SIGN_IN_BUTTON);
  }

  /**
   * Complete login flow
   */
  async login(email: string, password: string): Promise<void> {
    await this.enterEmail(email);
    await this.hideKeyboard();
    await this.enterPassword(password);
    await this.hideKeyboard();
    await this.tapSignIn();
  }

  /**
   * Check if login screen is displayed
   */
  async isLoginScreenDisplayed(): Promise<boolean> {
    return super.isDisplayed(LoginSelectors.EMAIL_INPUT);
  }

  /**
   * Clear the login form fields
   */
  async clearForm(): Promise<void> {
    const emailElement = await $(LoginSelectors.EMAIL_INPUT);
    await emailElement.clearValue();
    await this.hideKeyboard();
    const passwordElement = await $(LoginSelectors.PASSWORD_INPUT);
    await passwordElement.clearValue();
    await this.hideKeyboard();
  }

  /**
   * Wait for login screen to be ready
   */
  async waitForLoginScreen(): Promise<void> {
    await this.waitForElement(LoginSelectors.EMAIL_INPUT);
  }

  /**
   * Dismiss any error dialogs/snackbars by waiting for them to auto-dismiss
   */
  async dismissErrorsIfAny(): Promise<void> {
    // Wait for any error animations/snackbars to auto-dismiss
    await this.pause(2000);
  }

  /**
   * Tap forgot password link
   */
  async tapForgotPassword(): Promise<void> {
    await this.click(LoginSelectors.FORGOT_PASSWORD_BUTTON);
  }

  /**
   * Tap create account link
   */
  async tapCreateAccount(): Promise<void> {
    await this.click(LoginSelectors.CREATE_ACCOUNT_BUTTON);
  }
}

export const LoginPage = new LoginPageClass();
