/**
 * Test related type definitions
 */

/**
 * Test credentials
 */
export interface Credentials {
  email: string;
  password: string;
}

/**
 * Test result status
 */
export type TestStatus = 'passed' | 'failed' | 'skipped' | 'pending';

/**
 * Test priority levels
 */
export type TestPriority = 'critical' | 'high' | 'medium' | 'low';

/**
 * Test metadata for reporting
 */
export interface TestMetadata {
  id: string;
  title: string;
  priority: TestPriority;
  feature: string;
  tags?: string[];
}

/**
 * Test result with details
 */
export interface TestResult {
  status: TestStatus;
  duration: number;
  error?: Error;
  screenshots?: string[];
}
