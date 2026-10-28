import { config } from "dotenv";

config();

const selectors = {
  android: {
    loginButton: "~login_button",
    emailField: "~email_input",
    passwordField: "~password_input",
    submitButton: "~submit_button",
  },
  ios: {
    loginButton: "~login_button",
    emailField: "~email_input",
    passwordField: "~password_input",
    submitButton: "~submit_button",
  },
} as const;

type SelectorKey = keyof typeof selectors.android;

export const TestData = {
  credentials: {
    validUser: {
      email: process.env.QC_TEST_USER || "test@example.com",
      password: process.env.QC_TEST_PASSWORD || "testpass123",
    },
    invalidUser: {
      email: "invalid@example.com",
      password: "wrongpassword",
    },
  },

  machine: {
    id: process.env.QC_MACHINE_ID || "QIO-A3F2",
    name: "Test QIO Machine",
  },

  timeouts: {
    short: 3000,
    medium: 10000,
    long: 30000,
    bleConnection: 60000,
  },

  selectors,
};

export function getSelector(key: SelectorKey): string {
  const platform = (process.env.PLATFORM || "android") as "android" | "ios";
  return selectors[platform][key];
}
