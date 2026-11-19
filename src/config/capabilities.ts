// Android - USB connected device
export const androidCapabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:udid': 'ce0517154bb8261403',
  'appium:deviceName': 'Android Device',
  'appium:noReset': true,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 240,
  // App launch settings - Quantum Connect Dev
  'appium:appPackage': 'com.steelwrist.quantumconnect.dev',
  'appium:appActivity': 'com.steelwrist.quantumconnect.MainActivity',
};

// iOS - iPhone 13 (wirelessly connected)
export const iosCapabilities = {
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:udid': '00008110-00061C1E3630A01E',
  'appium:deviceName': "yahefu's iPhone13",
  'appium:platformVersion': '18.4',
  'appium:noReset': true,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 240,
  // App launch settings - Quantum Connect Dev
  'appium:bundleId': 'com.steelwrist.quantumconnect.dev',
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
