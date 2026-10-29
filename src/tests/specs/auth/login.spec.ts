import { LoginPage } from '../../../pages/login.page';
import { AuthTestData } from '../../data/auth.data';

// App package name - will be populated in before hook
let appPackage: string | null = null;

describe('Login Tests', () => {
  before(async () => {
    // Get the current app package for potential restart
    appPackage = await LoginPage.getCurrentPackage();
    console.log(`App package: ${appPackage}`);
  });

  beforeEach(async () => {
    // Check if we're on login screen
    let isOnLogin = await LoginPage.isLoginScreenDisplayed();

    // If not on login, try to restart the app
    if (!isOnLogin && appPackage) {
      console.log('Not on login screen, restarting app...');
      await LoginPage.restartApp(appPackage);
      isOnLogin = await LoginPage.isLoginScreenDisplayed();
    }

    // Clear form if on login screen
    if (isOnLogin) {
      await LoginPage.clearForm();
    }
  });

  it('AUTH-002: Should show error with invalid credentials', async () => {
    const { email, password } = AuthTestData.invalidUser;

    await LoginPage.login(email, password);

    // TODO: Add assertion for error message
    // await expect(LoginPage.getErrorMessage()).toContain('Invalid');
  });

  it('AUTH-004: Should show error with wrong password', async () => {
    const { email, password } = AuthTestData.wrongPassword;

    await LoginPage.login(email, password);

    // TODO: Add assertion for error message
    // await expect(LoginPage.getErrorMessage()).toContain('Invalid');
  });

  // These tests may navigate away from login screen, so run them last
  it.only('AUTH-001: Should login with valid credentials', async () => {
    const { email, password } = AuthTestData.validUser;

    await LoginPage.login(email, password);

    // TODO: Add assertion for successful login
    // await expect(HomePage.isDisplayed()).toBe(true);
  });

  it('AUTH-003: Should not login with empty fields', async () => {
    // Note: This test may not be on login screen if previous test succeeded
    // Form is already cleared by beforeEach
    await LoginPage.tapSignIn();

    // TODO: Add assertion for validation error
    // await expect(LoginPage.isEmailErrorDisplayed()).toBe(true);
  });
});
