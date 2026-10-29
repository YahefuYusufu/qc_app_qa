/**
 * IOM (Input/Output Mapping) setup page selectors
 */
export const IOMSelectors = {
  // Screen
  IOM_SCREEN: '~iom_setup_screen',

  // Function list
  FUNCTION_LIST: '~function_list',
  FUNCTION_ITEM: '~function_item',
  FUNCTION_NAME: '~function_name',
  FUNCTION_TYPE: '~function_type',
  FUNCTION_STATUS: '~function_status',

  // Actions
  ADD_FUNCTION_BUTTON: '~add_function_button',
  EDIT_FUNCTION_BUTTON: '~edit_function',
  DELETE_FUNCTION_BUTTON: '~delete_function',
  SAVE_MAPPING_BUTTON: '~save_mapping',

  // Function settings
  INPUT_SELECTOR: '~input_selector',
  OUTPUT_SELECTOR: '~output_selector',
  DUAL_MODE_TOGGLE: '~dual_mode_toggle',

  // Collision detection
  COLLISION_WARNING: '~collision_warning',
  COLLISION_DETAILS: '~collision_details',
  RESOLVE_COLLISION_BUTTON: '~resolve_collision',

  // Empty state
  NO_FUNCTIONS: '~no_functions',
} as const;
