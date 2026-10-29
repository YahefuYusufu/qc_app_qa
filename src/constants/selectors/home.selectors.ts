/**
 * Home page selectors (after login)
 */
export const HomeSelectors = {
  // Screen
  HOME_SCREEN: '~home_screen',

  // Header
  HEADER_TITLE: '~header_title',
  PROFILE_BUTTON: '~profile_button',
  SETTINGS_BUTTON: '~settings_button',

  // Machine connection
  CONNECTED_MACHINE: '~connected_machine',
  MACHINE_NAME: '~machine_name',
  MACHINE_STATUS: '~machine_status',
  DISCONNECT_BUTTON: '~disconnect_button',

  // Navigation
  SCAN_MACHINES_BUTTON: '~scan_machines',
  IOM_SETUP_BUTTON: '~iom_setup',
  FUNCTIONS_BUTTON: '~functions_button',

  // Status
  CONNECTION_STATUS: '~connection_status',
  BLUETOOTH_ICON: '~bluetooth_icon',
} as const;
