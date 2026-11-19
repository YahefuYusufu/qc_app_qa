# Quantum Connect QA Automation

Mobile test automation framework for the Quantum Connect app using Appium + WebdriverIO + TypeScript.

## Prerequisites

- Node.js 18+
- Android SDK with platform-tools (for `adb`)
- Physical Android device connected via USB
- Quantum Connect app installed on device

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Connect Your Android Device

Connect your device via USB and verify it's detected:

```bash
adb devices
```

Expected output:

```
List of devices attached
ce0517154bb8261403    device
```

### 3. Update Device Configuration (if needed)

Edit `src/config/capabilities.ts` and update the UDID to match your device:

```typescript
'appium:udid': 'YOUR_DEVICE_ID',
```

### 4. Set Up Environment Variables

Copy the example env file and add your credentials:

```bash
cp .env.example .env
```

Edit `.env`:

```
QC_TEST_USER=your_email@example.com
QC_TEST_PASSWORD=your_password
```

### 5. Start Appium Server

Open a terminal and start Appium:

```bash
npx appium --address localhost --port 4723
```

Keep this terminal open. You should see:

```
[Appium] Welcome to Appium v3.9.0
[Appium] Appium REST http interface listener started on http://localhost:4723
```

### 6. Run Tests

Open a **new terminal** and run:

```bash
# Run all Android tests
npm run test:android

# Run specific test suites
npm run test:auth        # Login/logout tests
npm run test:connection  # BLE/machine connection tests
npm run test:mapping     # Function mapping tests
npm run test:smoke       # Smoke tests
```

## Project Structure

```
src/
├── config/
│   ├── capabilities.ts      # Device capabilities (UDID, app package)
│   ├── wdio.conf.ts         # Base WebdriverIO config
│   ├── wdio.android.conf.ts # Android-specific config
│   └── wdio.ios.conf.ts     # iOS-specific config
├── constants/
│   ├── timeouts.ts          # Timeout values
│   └── selectors/           # UI element selectors
├── pages/                   # Page Object Model classes
├── tests/
│   └── specs/               # Test specifications
│       ├── auth/            # Login/logout tests
│       ├── connection/      # BLE/machine tests
│       ├── mapping/         # Function mapping tests
│       └── smoke/           # Smoke tests
├── helpers/                 # Utility functions
└── hooks/                   # WebdriverIO lifecycle hooks
```

## Current Configuration

### Android Device

- **UDID**: `ce0517154bb8261403`
- **App Package**: `com.steelwrist.quantumconnect.dev`
- **App Activity**: `com.steelwrist.quantumconnect.MainActivity`

### App Variants Available

| Package                                 | Description       |
| --------------------------------------- | ----------------- |
| `com.steelwrist.quantumconnect.dev`     | Development build |
| `com.steelwrist.quantumconnect.staging` | Staging build     |
| `com.steelwrist.quantumconnect`         | Production build  |

To switch app variants, update `appPackage` in `src/config/capabilities.ts`.

## Testing Without Login Credentials

If you're already logged in on the device, you can run tests without providing credentials.

### Run Smoke Tests (No Login Required)

```bash
npm run test:smoke
```

---

## iOS Setup

### Prerequisites for iOS

- macOS with Xcode installed
- Xcode Command Line Tools (`xcode-select --install`)
- iPhone connected via **USB cable** (wireless not supported)
- Quantum Connect app installed on device

### 1. Connect Your iPhone via USB

Connect your iPhone and verify it's detected:

```bash
xcrun xctrace list devices
```

Expected output (device should NOT show "Offline"):

```
== Devices ==
yahefu's iPhone13 (18.5) (00008110-00061C1E3630A01E)
```

### 2. Trust the Computer

On your iPhone:

1. Unlock the phone
2. If prompted, tap **"Trust This Computer"**
3. Enter your passcode

### 3. Find Your Device UDID

```bash
xcrun xctrace list devices | grep iPhone
```

Copy the UDID (the long string in parentheses).

### 4. Update iOS Configuration

Edit `src/config/capabilities.ts`:

```typescript
export const iosCapabilities = {
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:udid': 'YOUR_DEVICE_UDID',           // ← Update this
  'appium:deviceName': 'Your iPhone Name',
  'appium:platformVersion': '18.5',             // ← Your iOS version
  'appium:noReset': true,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 240,
  'appium:bundleId': 'com.steelwrist.quantumconnect.dev',
};
```

### 5. Start Appium Server

```bash
npx appium --address localhost --port 4723
```

### 6. Run iOS Tests

```bash
# Run all iOS tests
npm run test:ios

# Run specific test
npm run test:ios -- --spec src/tests/specs/smoke/smoke.spec.ts
```

### iOS Troubleshooting

| Error | Solution |
|-------|----------|
| "Unknown device UDID" | Connect via USB (not wireless), trust computer |
| "Could not launch app" | Verify bundleId matches installed app |
| "WebDriverAgent failed" | Open Xcode, build WebDriverAgent manually |
| Device shows "Offline" | Reconnect USB, unlock phone, trust computer |

### Check iOS Device Connection

```bash
# List all devices
xcrun xctrace list devices

# Check if device is trusted
xcrun devicectl list devices
```

---

## Available NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run test:android` | Run all tests on Android |
| `npm run test:ios` | Run all tests on iOS |
| `npm run test:auth` | Run authentication tests |
| `npm run test:connection` | Run BLE/connection tests |
| `npm run test:mapping` | Run function mapping tests |
| `npm run test:smoke` | Run smoke tests |
| `npm run report:generate` | Generate Allure report |
| `npm run report:open` | Open Allure report |

---

## Troubleshooting

### Android

#### Device not detected

```bash
# Restart ADB
adb kill-server
adb start-server
adb devices
```

#### Find app package name

```bash
adb shell pm list packages | grep quantum
```

#### Get current activity

```bash
adb shell dumpsys activity activities | grep mResumedActivity
```

### Appium

#### Connection refused

Make sure Appium is running:

```bash
# Check if running
curl http://localhost:4723/status

# Start if not running
npx appium --address localhost --port 4723
```

#### Element not found

The Flutter app needs accessibility IDs (Semantics labels) matching the selectors in `src/constants/selectors/`.

---

## Test Reports

After running tests, generate and view Allure reports:

```bash
npm run report:generate
npm run report:open
```

Reports are saved in `reports/allure-report/`.
