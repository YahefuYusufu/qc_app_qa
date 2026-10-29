/**
 * Login page selectors
 */
export const LoginSelectors = {
  // Screen
  LOGIN_SCREEN: '~login_screen',

  // Input fields
  EMAIL_INPUT: '~email_input',
  PASSWORD_INPUT: '~password_input',

  // Buttons
  SIGN_IN_BUTTON: '~sign_in_button',
  FORGOT_PASSWORD_BUTTON: '~forgot_password_button',
  CREATE_ACCOUNT_BUTTON: '~create_account_button',

  // Validation messages
  EMAIL_ERROR: '~email_error',
  PASSWORD_ERROR: '~password_error',
  LOGIN_ERROR: '~login_error_message',

  // Other
  REMEMBER_ME_CHECKBOX: '~remember_me',
  SHOW_PASSWORD_TOGGLE: '~show_password',
} as const;
