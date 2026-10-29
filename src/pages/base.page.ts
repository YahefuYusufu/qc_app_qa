import { ScreenshotHelper } from '../helpers/screenshot.helper';
import { Timeouts } from '../constants';

export class BasePage {
  /**
   * Wait for element to be displayed and return it
   */
  async waitForElement(selector: string, timeout = Timeouts.MEDIUM): Promise<WebdriverIO.Element> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    return element;
  }

  /**
   * Wait for element to be clickable (displayed and enabled) and return it
   * Note: isClickable() is not supported in mobile native apps, so we use waitForDisplayed + isEnabled
   */
  async waitForClickable(selector: string, timeout = Timeouts.MEDIUM): Promise<WebdriverIO.Element> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    await element.waitForEnabled({ timeout });
    return element;
  }

  /**
   * Click on an element
   */
  async click(selector: string): Promise<void> {
    const element = await this.waitForClickable(selector);
    await element.click();
  }

  /**
   * Type text into an input field
   */
  async type(selector: string, text: string): Promise<void> {
    const element = await this.waitForElement(selector);
    await element.clearValue();
    await element.setValue(text);
  }

  /**
   * Get text from an element
   */
  async getText(selector: string): Promise<string> {
    const element = await this.waitForElement(selector);
    return element.getText();
  }

  /**
   * Check if element is displayed
   */
  async isDisplayed(selector: string, timeout = Timeouts.SHORT): Promise<boolean> {
    try {
      const element = await $(selector);
      await element.waitForDisplayed({ timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Wait for element to disappear
   */
  async waitForElementToDisappear(selector: string, timeout = Timeouts.MEDIUM): Promise<void> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout, reverse: true });
  }

  /**
   * Take a screenshot with a descriptive name
   */
  async screenshot(name: string): Promise<string> {
    return ScreenshotHelper.capture(name);
  }

  /**
   * Pause execution for specified milliseconds
   */
  async pause(ms: number): Promise<void> {
    await browser.pause(ms);
  }

  /**
   * Scroll down the screen
   */
  async scrollDown(): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    await browser.touchAction([
      { action: 'press', x: width / 2, y: height * 0.7 },
      { action: 'wait', ms: 100 },
      { action: 'moveTo', x: width / 2, y: height * 0.3 },
      { action: 'release' },
    ]);
  }

  /**
   * Scroll up the screen
   */
  async scrollUp(): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    await browser.touchAction([
      { action: 'press', x: width / 2, y: height * 0.3 },
      { action: 'wait', ms: 100 },
      { action: 'moveTo', x: width / 2, y: height * 0.7 },
      { action: 'release' },
    ]);
  }

  /**
   * Hide keyboard if visible
   */
  async hideKeyboard(): Promise<void> {
    try {
      await browser.hideKeyboard();
    } catch {
      // Keyboard might not be visible
    }
  }

  /**
   * Get attribute value from element
   */
  async getAttribute(selector: string, attribute: string): Promise<string | null> {
    const element = await this.waitForElement(selector);
    return element.getAttribute(attribute);
  }

  /**
   * Restart the app (terminate and relaunch)
   * Only works if app package is known
   */
  async restartApp(appPackage: string): Promise<void> {
    try {
      // Use type assertion for Appium-specific methods
      await (driver as any).terminateApp(appPackage);
      await this.pause(1000);
      await (driver as any).activateApp(appPackage);
      await this.pause(2000);
    } catch (error) {
      console.log('Could not restart app:', error);
    }
  }

  /**
   * Get current app package (Android only)
   */
  async getCurrentPackage(): Promise<string | null> {
    try {
      return await driver.getCurrentPackage();
    } catch {
      return null;
    }
  }
}