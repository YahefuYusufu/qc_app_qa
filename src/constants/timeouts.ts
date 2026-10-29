/**
 * Centralized timeout constants
 * All timeout values in milliseconds
 */
export const Timeouts = {
  // Element waits
  SHORT: 3000,
  MEDIUM: 10000,
  LONG: 30000,

  // Specific operations
  SPLASH_SCREEN: 5000,
  LOGIN: 15000,
  BLE_SCAN: 20000,
  BLE_CONNECTION: 60000,
  PAGE_LOAD: 10000,
  ANIMATION: 500,

  // Network operations
  API_RESPONSE: 30000,
  FILE_UPLOAD: 60000,
} as const;

export type TimeoutKey = keyof typeof Timeouts;
