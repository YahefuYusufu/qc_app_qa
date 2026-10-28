import { config as baseConfig } from "./wdio.conf";
import { androidCapabilities } from "./capabilities";
import { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [androidCapabilities],
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
