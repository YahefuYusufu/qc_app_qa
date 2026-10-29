export class WaitHelper {
  static async forElement(
    selector: string,
    timeout: number = 10000
  ): Promise<WebdriverIO.Element> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    return element;
  }

  static async forElementToDisappear(
    selector: string,
    timeout: number = 10000
  ): Promise<void> {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout, reverse: true });
  }

  static async forClickable(
    selector: string,
    timeout: number = 10000
  ): Promise<WebdriverIO.Element> {
    const element = await $(selector);
    await element.waitForClickable({ timeout });
    return element;
  }

  static async pause(ms: number): Promise<void> {
    await browser.pause(ms);
  }

  static async forCondition(
    condition: () => Promise<boolean>,
    timeout: number = 10000,
    interval: number = 500
  ): Promise<void> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      if (await condition()) {
        return;
      }
      await this.pause(interval);
    }
    throw new Error(`Condition not met within ${timeout}ms`);
  }
}
