export const androidCapabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:app': './apps/quantum-connect.apk',
  'appium:deviceName': 'Pixel 6',
  'appium:platformVersion': '13',
  'appium:noReset': false,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 240,
};

export const iosCapabilities = {
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:app': './apps/quantum-connect.ipa',
  'appium:deviceName': 'iPhone 14',
  'appium:platformVersion': '16.0',
  'appium:noReset': false,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 240,
};
