/**
 * Environment variable type definitions
 */
declare namespace NodeJS {
  interface ProcessEnv {
    // Authentication
    QC_TEST_USER: string;
    QC_TEST_PASSWORD: string;

    // Machine/BLE
    QC_MACHINE_ID: string;
    QC_MACHINE_NAME?: string;

    // Appium server
    APPIUM_HOST: string;
    APPIUM_PORT: string;

    // Platform
    PLATFORM: 'android' | 'ios';

    // Environment
    NODE_ENV?: 'development' | 'test' | 'production';
  }
}
