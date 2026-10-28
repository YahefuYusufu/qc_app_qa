declare namespace NodeJS {
  interface ProcessEnv {
    QC_TEST_USER: string;
    QC_TEST_PASSWORD: string;
    QC_MACHINE_ID: string;
    APPIUM_HOST: string;
    APPIUM_PORT: string;
    PLATFORM: 'android' | 'ios';
  }
}
