import { config as baseConfig } from "./wdio.conf";
import { androidCapabilities } from "./capabilities";
import { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [androidCapabilities],
  // Connect to already running Appium server
  hostname: "localhost",
  port: 4723,
  services: [],
};
