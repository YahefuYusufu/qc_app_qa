import { config as baseConfig } from "./wdio.conf";
import { iosCapabilities } from "./capabilities";
import { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [iosCapabilities],
  services: [
    [
      "appium",
      {
        args: {
          address: "localhost",
          port: 4723,
        },
      },
    ],
  ],
};
