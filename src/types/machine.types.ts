/**
 * Machine and BLE related type definitions
 */

/**
 * BLE connection state
 */
export type ConnectionState =
  | 'disconnected'
  | 'scanning'
  | 'connecting'
  | 'connected'
  | 'failed';

/**
 * Machine/QIO device info
 */
export interface MachineInfo {
  id: string;
  name: string;
  signalStrength?: number;
  isConnected?: boolean;
}

/**
 * IOM Function types
 */
export type FunctionType =
  | 'input'
  | 'output'
  | 'dual';

/**
 * IOM Function mapping
 */
export interface FunctionMapping {
  id: string;
  name: string;
  type: FunctionType;
  inputSource?: string;
  outputTarget?: string;
  isDualMode: boolean;
}

/**
 * Collision detection result
 */
export interface CollisionResult {
  hasCollision: boolean;
  conflictingFunctions?: string[];
  message?: string;
}
