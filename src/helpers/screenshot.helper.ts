import * as fs from 'fs';
import * as path from 'path';

export class ScreenshotHelper {
  private static screenshotDir = './screenshots';

  static async capture(name: string): Promise<string> {
    if (!fs.existsSync(this.screenshotDir)) {
      fs.mkdirSync(this.screenshotDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${name}_${timestamp}.png`;
    const filepath = path.join(this.screenshotDir, filename);

    const screenshot = await browser.takeScreenshot();
    fs.writeFileSync(filepath, screenshot, 'base64');

    return filepath;
  }

  static async captureOnFailure(testName: string): Promise<string> {
    return this.capture(`FAILED_${testName}`);
  }
}
