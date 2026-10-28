import type { Options } from "@wdio/types";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

export const config: Options.Testrunner = {
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },

  specs: ["./src/tests/**/*.spec.ts"],
  exclude: [],

  maxInstances: 1,

  capabilities: [],

  logLevel: "info",

  bail: 0,

  baseUrl: "",

  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: ["appium"],

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "./reports/allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  afterTest: async function (test, context, { error, passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
