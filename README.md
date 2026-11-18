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
