import type { Options } from '@wdio/types';
import { config as dotenvConfig } from 'dotenv';
import * as hooks from '../hooks/wdio.hooks';
import { Timeouts } from '../constants';

dotenvConfig();

export const config: Options.Testrunner = {
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true,
    },
  },

  // Test specs location
  specs: ['./src/tests/specs/**/*.ts'],
  exclude: [],

  maxInstances: 1,

  capabilities: [],

  logLevel: 'info',

  bail: 0,

  baseUrl: '',

  // Timeouts from constants
  waitforTimeout: Timeouts.MEDIUM,
  connectionRetryTimeout: Timeouts.API_RESPONSE * 4,
  connectionRetryCount: 3,

  services: ['appium'],

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: Timeouts.BLE_CONNECTION,
  },

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: './reports/allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  // Lifecycle hooks
  beforeSuite: hooks.beforeSuite,
  beforeTest: hooks.beforeTest,
  afterTest: hooks.afterTest,
  afterSuite: hooks.afterSuite,
};
