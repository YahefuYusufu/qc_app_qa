import { config } from 'dotenv';

config();

/**
 * Machine/BLE connection test data
 */
export const MachineTestData = {
  targetMachine: {
    id: process.env.QC_MACHINE_ID || 'QIO-A3F2',
    name: process.env.QC_MACHINE_NAME || 'Test QIO Machine',
  },

  // Expected machine prefixes for filtering
  machineIdPrefix: 'QIO-',

  // Connection states
  connectionStates: {
    DISCONNECTED: 'disconnected',
    CONNECTING: 'connecting',
    CONNECTED: 'connected',
    FAILED: 'failed',
  },

  // Expected minimum signal strength (for filtering weak signals)
  minSignalStrength: -80,
} as const;
