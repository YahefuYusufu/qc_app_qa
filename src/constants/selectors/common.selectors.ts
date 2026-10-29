/**
 * Common selectors used across multiple pages
 * Prefix legend:
 *   ~ = accessibility id
 *   // = xpath
 *   . = class name
 *   # = id
 */
export const CommonSelectors = {
  // Loading indicators
  LOADER: '~loader',
  SPINNER: '~loading_spinner',
  PROGRESS_BAR: '~progress_bar',

  // Navigation
  BACK_BUTTON: '~back_button',
  CLOSE_BUTTON: '~close_button',
  MENU_BUTTON: '~menu_button',

  // Dialogs
  DIALOG_CONTAINER: '~dialog',
  DIALOG_TITLE: '~dialog_title',
  DIALOG_MESSAGE: '~dialog_message',
  DIALOG_CONFIRM: '~dialog_confirm',
  DIALOG_CANCEL: '~dialog_cancel',

  // Toast/Snackbar
  TOAST: '~toast_message',
  SNACKBAR: '~snackbar',

  // Common buttons
  SUBMIT_BUTTON: '~submit_button',
  SAVE_BUTTON: '~save_button',
  CANCEL_BUTTON: '~cancel_button',
} as const;
