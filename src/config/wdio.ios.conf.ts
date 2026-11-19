import { config as baseConfig } from "./wdio.conf";
import { iosCapabilities } from "./capabilities";
import { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [iosCapabilities],
  // Connect to already running Appium server
  hostname: "localhost",
  port: 4723,
  services: [],
};
