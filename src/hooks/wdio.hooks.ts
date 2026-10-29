import { ScreenshotHelper } from '../helpers/screenshot.helper';

/**
 * WebdriverIO lifecycle hooks
 * These are imported into wdio.conf.ts
 */

/**
 * Runs before a test starts
 */
export async function beforeTest(test: { title: string }): Promise<void> {
  console.log(`\n▶ Starting test: ${test.title}`);
}

/**
 * Runs after each test completes
 */
export async function afterTest(
  test: { title: string },
  _context: unknown,
  result: { passed: boolean; error?: Error }
): Promise<void> {
  if (!result.passed) {
    const screenshotName = test.title.replace(/\s+/g, '_').toLowerCase();
    await ScreenshotHelper.captureOnFailure(screenshotName);
    console.log(`✘ Test failed: ${test.title}`);
    if (result.error) {
      console.log(`  Error: ${result.error.message}`);
    }
  } else {
    console.log(`✔ Test passed: ${test.title}`);
  }
}

/**
 * Runs before the test suite starts
 */
export async function beforeSuite(suite: { title: string }): Promise<void> {
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`📋 Suite: ${suite.title}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
}

/**
 * Runs after the test suite completes
 */
export async function afterSuite(suite: { title: string }): Promise<void> {
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`✅ Suite completed: ${suite.title}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
}
