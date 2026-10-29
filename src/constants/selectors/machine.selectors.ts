/**
 * Machine selection/connection page selectors
 */
export const MachineSelectors = {
  // Screen
  MACHINE_LIST_SCREEN: '~machine_list_screen',

  // Scanning
  SCAN_BUTTON: '~scan_button',
  SCANNING_INDICATOR: '~scanning_indicator',
  SCAN_STATUS: '~scan_status',

  // Machine list
  MACHINE_LIST: '~machine_list',
  MACHINE_ITEM: '~machine_item',
  MACHINE_ITEM_NAME: '~machine_item_name',
  MACHINE_ITEM_ID: '~machine_item_id',
  MACHINE_ITEM_SIGNAL: '~machine_signal_strength',

  // Connection
  CONNECT_BUTTON: '~connect_button',
  CONNECTING_INDICATOR: '~connecting_indicator',
  CONNECTION_SUCCESS: '~connection_success',
  CONNECTION_FAILED: '~connection_failed',

  // Empty state
  NO_MACHINES_FOUND: '~no_machines_found',
  RETRY_SCAN_BUTTON: '~retry_scan',
} as const;
