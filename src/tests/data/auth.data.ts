import { config } from 'dotenv';

config();

/**
 * Authentication test data
 * Uses environment variables with fallbacks for local development
 */
export const AuthTestData = {
  validUser: {
    email: process.env.QC_TEST_USER || 'test@example.com',
    password: process.env.QC_TEST_PASSWORD || 'testpass123',
  },

  invalidUser: {
    email: 'invalid@example.com',
    password: 'wrongpassword',
  },

  wrongPassword: {
    email: process.env.QC_TEST_USER || 'test@example.com',
    password: 'wrong_password_123',
  },

  emptyCredentials: {
    email: '',
    password: '',
  },

  invalidEmailFormat: {
    email: 'not-an-email',
    password: 'somepassword',
  },

  shortPassword: {
    email: 'test@example.com',
    password: '123',
  },
} as const;

export type AuthCredentials = {
  email: string;
  password: string;
};
