export class GestureHelper {
  static async swipeUp(percentage: number = 0.5): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    const startX = width / 2;
    const startY = height * 0.8;
    const endY = height * (0.8 - percentage);

    await browser.touchAction([
      { action: 'press', x: startX, y: startY },
      { action: 'wait', ms: 100 },
      { action: 'moveTo', x: startX, y: endY },
      { action: 'release' },
    ]);
  }

  static async swipeDown(percentage: number = 0.5): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    const startX = width / 2;
    const startY = height * 0.2;
    const endY = height * (0.2 + percentage);

    await browser.touchAction([
      { action: 'press', x: startX, y: startY },
      { action: 'wait', ms: 100 },
      { action: 'moveTo', x: startX, y: endY },
      { action: 'release' },
    ]);
  }

  static async swipeLeft(percentage: number = 0.5): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    const startX = width * 0.8;
    const startY = height / 2;
    const endX = width * (0.8 - percentage);

    await browser.touchAction([
      { action: 'press', x: startX, y: startY },
      { action: 'wait', ms: 100 },
      { action: 'moveTo', x: endX, y: startY },
      { action: 'release' },
    ]);
  }

  static async swipeRight(percentage: number = 0.5): Promise<void> {
    const { width, height } = await browser.getWindowSize();
    const startX = width * 0.2;
    const startY = height / 2;
    const endX = width * (0.2 + percentage);

    await browser.touchAction([
      { action: 'press', x: startX, y: startY },
      { action: 'wait', ms: 100 },
      { action: 'moveTo', x: endX, y: startY },
      { action: 'release' },
    ]);
  }

  static async tap(x: number, y: number): Promise<void> {
    await browser.touchAction([
      { action: 'tap', x, y },
    ]);
  }

  static async longPress(element: WebdriverIO.Element, duration: number = 1000): Promise<void> {
    await browser.touchAction([
      { action: 'press', element },
      { action: 'wait', ms: duration },
      { action: 'release' },
    ]);
  }

  static async scrollToElement(
    selector: string,
    maxScrolls: number = 5
  ): Promise<WebdriverIO.Element> {
    let element = await $(selector);
    let scrollCount = 0;

    while (!(await element.isDisplayed()) && scrollCount < maxScrolls) {
      await this.swipeUp(0.3);
      element = await $(selector);
      scrollCount++;
    }

    if (!(await element.isDisplayed())) {
      throw new Error(`Element ${selector} not found after ${maxScrolls} scrolls`);
    }

    return element;
  }
}
