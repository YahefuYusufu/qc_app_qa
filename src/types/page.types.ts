/**
 * Page object related type definitions
 */

/**
 * Base page interface that all pages implement
 */
export interface IBasePage {
  waitForElement(selector: string, timeout?: number): Promise<WebdriverIO.Element>;
  waitForClickable(selector: string, timeout?: number): Promise<WebdriverIO.Element>;
  click(selector: string): Promise<void>;
  type(selector: string, text: string): Promise<void>;
  getText(selector: string): Promise<string>;
  isDisplayed(selector: string, timeout?: number): Promise<boolean>;
  screenshot(name: string): Promise<string>;
}

/**
 * Login page interface
 */
export interface ILoginPage extends IBasePage {
  login(email: string, password: string): Promise<void>;
  getErrorMessage(): Promise<string>;
  isLoginScreenDisplayed(): Promise<boolean>;
}

/**
 * Home page interface
 */
export interface IHomePage extends IBasePage {
  isHomeScreenDisplayed(): Promise<boolean>;
  getConnectedMachineName(): Promise<string>;
  navigateToScan(): Promise<void>;
  navigateToIOMSetup(): Promise<void>;
  logout(): Promise<void>;
}

/**
 * Machine selection page interface
 */
export interface IMachineSelectionPage extends IBasePage {
  startScan(): Promise<void>;
  waitForScanComplete(): Promise<void>;
  selectMachine(machineId: string): Promise<void>;
  getMachineList(): Promise<string[]>;
  isConnected(): Promise<boolean>;
}
