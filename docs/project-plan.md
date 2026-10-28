# QC App QA - Mobile Automation Test Suite

> Appium-based E2E testing for Quantum Connect Flutter mobile app

## Overview

An automated test suite for the **Quantum Connect** mobile application using Appium + WebdriverIO + TypeScript. The app connects via Bluetooth to machine systems (QIO) for configuration and monitoring.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Appium 2.x** | Mobile automation server |
| **WebdriverIO** | Test framework & Appium client |
| **TypeScript** | Type-safe test scripts |
| **Allure Report** | Beautiful HTML reports with screenshots |
| **GitHub Actions** | CI/CD pipeline |
| **GitHub Pages** | Host test reports (public URL) |

---

## Project Structure

```
qc_app_qa/
├── docs/
│   └── project-plan.md              # This file
│
├── src/
│   ├── config/
│   │   ├── wdio.conf.ts             # WebdriverIO config
│   │   ├── wdio.android.conf.ts     # Android-specific config
│   │   ├── wdio.ios.conf.ts         # iOS-specific config
│   │   └── capabilities.ts          # Device capabilities
│   │
│   ├── pages/                       # Page Object Model
│   │   ├── base.page.ts             # Base page with common methods
│   │   ├── splash.page.ts
│   │   ├── login.page.ts
│   │   ├── machine-selection.page.ts
│   │   ├── home.page.ts
│   │   ├── iom-setup.page.ts
│   │   ├── add-function.page.ts
│   │   └── function-settings.page.ts
│   │
│   ├── tests/
│   │   ├── auth/
│   │   │   ├── login.spec.ts
│   │   │   └── logout.spec.ts
│   │   │
│   │   ├── connection/
│   │   │   ├── ble-scan.spec.ts
│   │   │   ├── machine-connect.spec.ts
│   │   │   └── machine-disconnect.spec.ts
│   │   │
│   │   ├── mapping/
│   │   │   ├── iom-setup.spec.ts
│   │   │   ├── add-function.spec.ts
│   │   │   ├── edit-function.spec.ts
│   │   │   ├── delete-function.spec.ts
│   │   │   └── dual-mode-collision.spec.ts
│   │   │
│   │   └── smoke/
│   │       └── smoke.spec.ts         # Quick health check
│   │
│   ├── utils/
│   │   ├── screenshot.ts            # Screenshot helpers
│   │   ├── wait.ts                  # Custom wait functions
│   │   ├── gestures.ts              # Swipe, scroll, tap helpers
│   │   └── test-data.ts             # Test credentials, data
│   │
│   └── types/
│       └── index.d.ts               # TypeScript type definitions
│
├── reports/                         # Generated test reports
│   └── allure-results/
│
├── screenshots/                     # Captured screenshots
│
├── .github/
│   └── workflows/
│       └── test.yml                 # GitHub Actions workflow
│
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## Test Scenarios

### 1. Authentication Tests

| ID | Test Case | Description | Priority |
|----|-----------|-------------|----------|
| AUTH-001 | Valid Login | Login with valid credentials | High |
| AUTH-002 | Invalid Login | Login with wrong password | High |
| AUTH-003 | Empty Fields | Submit empty login form | Medium |
| AUTH-004 | Logout | Logout from app | High |
| AUTH-005 | Session Persistence | App remembers login state | Medium |

### 2. BLE Connection Tests

| ID | Test Case | Description | Priority |
|----|-----------|-------------|----------|
| BLE-001 | Scan Machines | Scan for available QIO devices | High |
| BLE-002 | Connect to Machine | Connect to a specific machine | High |
| BLE-003 | Disconnect | Disconnect from machine | High |
| BLE-004 | Reconnection | Auto-reconnect after disconnect | Medium |
| BLE-005 | Multiple Machines | List shows multiple devices | Medium |

### 3. Mapping (IOM) Tests

| ID | Test Case | Description | Priority |
|----|-----------|-------------|----------|
| MAP-001 | View IOM Setup | Open IOM setup page | High |
| MAP-002 | Add Function | Add new mapping function | High |
| MAP-003 | Edit Function | Modify existing function | High |
| MAP-004 | Delete Function | Remove a mapping function | High |
| MAP-005 | Function Settings | Configure function parameters | High |
| MAP-006 | Input Selection | Select input source | High |
| MAP-007 | Output Selection | Select output target | High |
| MAP-008 | Save Mapping | Save configuration to device | High |

### 4. Dual Mode / Collision Tests

| ID | Test Case | Description | Priority |
|----|-----------|-------------|----------|
| DUAL-001 | Dual Mode Enable | Enable dual mode for function | High |
| DUAL-002 | Collision Detection | Detect conflicting mappings | High |
| DUAL-003 | Collision Warning | Show warning for conflicts | High |
| DUAL-004 | Resolve Collision | User resolves conflict | High |
| DUAL-005 | Prevent Invalid | Block invalid combinations | High |

### 5. Smoke Tests (Quick Health Check)

| ID | Test Case | Description | Priority |
|----|-----------|-------------|----------|
| SMOKE-001 | App Launch | App opens successfully | Critical |
| SMOKE-002 | Login Flow | Can login | Critical |
| SMOKE-003 | Scan Flow | Can scan for machines | Critical |
| SMOKE-004 | Connect Flow | Can connect to machine | Critical |
| SMOKE-005 | Basic Navigation | Navigate main screens | Critical |

---

## Screenshot Strategy

Screenshots are captured automatically at:
- **Test start** - Initial state
- **Key actions** - After important steps
- **Test end** - Final state
- **On failure** - Error state (automatic)

```typescript
// Example usage
await ScreenshotHelper.capture('login-page-loaded');
await LoginPage.enterCredentials(user, pass);
await ScreenshotHelper.capture('credentials-entered');
await LoginPage.submit();
await ScreenshotHelper.capture('login-complete');
```

---

## Reporting

### Allure Report Features
- Test results with pass/fail status
- Screenshots embedded in report
- Step-by-step execution details
- History and trends
- Categories (by feature)
- Environment info

### Report Access
- **Local**: `npm run report:open`
- **Online**: `https://yahefuyusufu.github.io/qc_app_qa`

### Automatic Updates
GitHub Actions automatically:
1. Runs tests on push/schedule
2. Generates Allure report
3. Deploys to GitHub Pages
4. (Optional) Sends Slack notification on failure

---

## CLI Commands

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run specific suite
npm run test:auth          # Authentication tests
npm run test:connection    # BLE connection tests
npm run test:mapping       # Mapping/IOM tests
npm run test:smoke         # Quick smoke test

# Run on specific platform
npm run test:android
npm run test:ios

# Generate report
npm run report:generate
npm run report:open

# Run single test file
npx wdio run src/config/wdio.conf.ts --spec src/tests/auth/login.spec.ts
```

---

## Configuration

### Test Credentials (Environment Variables)

```bash
# .env file (not committed)
QC_TEST_USER=test@example.com
QC_TEST_PASSWORD=testpass123
QC_MACHINE_ID=QIO-A3F2
```

### Device Capabilities

```typescript
// Android
{
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:app': './apps/quantum-connect.apk',
  'appium:deviceName': 'Pixel 6',
  'appium:platformVersion': '13'
}

// iOS
{
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:app': './apps/quantum-connect.ipa',
  'appium:deviceName': 'iPhone 14',
  'appium:platformVersion': '16.0'
}
```

---

## CI/CD Pipeline

### GitHub Actions Workflow

```yaml
# Triggers
- Push to main branch
- Pull request to main
- Manual trigger
- Scheduled (nightly)

# Steps
1. Setup Node.js
2. Install dependencies
3. Start Appium server
4. Run tests (Android emulator)
5. Generate Allure report
6. Deploy to GitHub Pages
7. Notify on failure (Slack/Email)
```

---

## Milestones

### Phase 1: Foundation
- [ ] Project setup (package.json, tsconfig, wdio config)
- [ ] Page Object structure
- [ ] Screenshot utility
- [ ] Allure integration
- [ ] Basic CI/CD

### Phase 2: Core Tests
- [ ] Authentication tests (login/logout)
- [ ] BLE scan tests
- [ ] Machine connection tests
- [ ] Smoke test suite

### Phase 3: Mapping Tests
- [ ] IOM setup tests
- [ ] Add/edit/delete function tests
- [ ] Function settings tests

### Phase 4: Advanced Tests
- [ ] Dual mode tests
- [ ] Collision detection tests
- [ ] Edge case tests

### Phase 5: Reporting & CI
- [ ] GitHub Pages deployment
- [ ] Slack notifications
- [ ] Scheduled nightly runs
- [ ] Test history/trends

---

## Dependencies

```json
{
  "devDependencies": {
    "@wdio/cli": "^8.x",
    "@wdio/local-runner": "^8.x",
    "@wdio/mocha-framework": "^8.x",
    "@wdio/spec-reporter": "^8.x",
    "@wdio/allure-reporter": "^8.x",
    "appium": "^2.x",
    "appium-uiautomator2-driver": "^2.x",
    "appium-xcuitest-driver": "^5.x",
    "typescript": "^5.x",
    "ts-node": "^10.x",
    "allure-commandline": "^2.x",
    "dotenv": "^16.x"
  }
}
```

---

## Prerequisites

### For Running Tests
1. Node.js 18+
2. Appium 2.x installed globally
3. Android SDK (for Android testing)
4. Xcode (for iOS testing, macOS only)
5. Quantum Connect APK/IPA file
6. Physical device or emulator/simulator

### For Real Device Testing
- BLE-enabled device
- QIO machine available for connection
- Test account credentials

---

## Related Projects

- `steelwrist-quantum-connect-flutter` - The Flutter mobile app being tested
- `qio_api` - QIO API Dart package
- `qio-api-qa` - Desktop API test suite

---

_Document created: 2026-10-28_
_Project: QC App QA_
