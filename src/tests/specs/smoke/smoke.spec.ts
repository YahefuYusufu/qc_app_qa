/**
 * Smoke tests - runs from current app state (no login required)
 * Use these to verify the app is running and inspect available elements
 */
describe('Smoke Tests', () => {
  it('SMOKE-001: App should be running', async () => {
    // Get current app package to verify connection
    const appPackage = await driver.getCurrentPackage();
    console.log(`Connected to app: ${appPackage}`);

    // Take screenshot of current screen
    const screenshot = await driver.takeScreenshot();
    console.log('Screenshot captured successfully');

    // Verify we're connected to the correct app
    expect(appPackage).toContain('quantumconnect');
  });

  it('SMOKE-002: Should capture page source for inspection', async () => {
    // Get the page source to see all available elements
    const pageSource = await driver.getPageSource();

    // Log element summary (look for content-desc for accessibility IDs)
    const contentDescMatches = pageSource.match(/content-desc="([^"]+)"/g);
    if (contentDescMatches) {
      console.log('\n=== Available Accessibility IDs ===');
      contentDescMatches.forEach((match: string) => {
        console.log(match);
      });
      console.log('===================================\n');
    }

    // Log text elements
    const textMatches = pageSource.match(/text="([^"]+)"/g);
    if (textMatches) {
      console.log('\n=== Visible Text Elements ===');
      textMatches.slice(0, 20).forEach((match: string) => {
        console.log(match);
      });
      console.log('=============================\n');
    }

    expect(pageSource).toBeTruthy();
  });

  it('SMOKE-003: Should verify current screen elements', async () => {
    // Try to find common elements on device list / home screen
    const possibleSelectors = [
      '~home_screen',
      '~device_list',
      '~machine_list',
      '~scan_machines',
      '~profile_button',
      '~settings_button',
    ];

    console.log('\n=== Checking for elements ===');
    for (const selector of possibleSelectors) {
      try {
        const element = await $(selector);
        const exists = await element.isExisting();
        console.log(`${selector}: ${exists ? 'FOUND' : 'not found'}`);
      } catch {
        console.log(`${selector}: not found`);
      }
    }
    console.log('=============================\n');
  });
});
