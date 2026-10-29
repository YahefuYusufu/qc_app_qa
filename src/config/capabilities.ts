// Android - Samsung Galaxy S8+ (wirelessly connected)
// Connects to already running app (Flutter debug mode)
export const androidCapabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:udid': '172.16.82.255:5555',
  'appium:deviceName': 'SM G955F',
  'appium:platformVersion': '9',
  'appium:noReset': true,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 240,
  // App should be open on device before running tests
};

// iOS - iPhone 13 (wirelessly connected)
export const iosCapabilities = {
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:app': './apps/quantum-connect.ipa',
  'appium:udid': '00008110-00061C1E3630A01E',
  'appium:deviceName': "yahefu's iPhone13",
  'appium:platformVersion': '26.6.2',
  'appium:noReset': false,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 240,
};

// Alternative iOS device - iPhone 15 Pro
export const iosCapabilitiesAlt = {
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:app': './apps/quantum-connect.ipa',
  'appium:udid': '00008120-001818202201A01E',
  'appium:deviceName': 'PP 15',
  'appium:platformVersion': '27.0.1',
  'appium:noReset': false,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 240,
};
