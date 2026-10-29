/**
 * Element and selector related types
 */

/**
 * Supported selector strategies for mobile
 */
export type SelectorStrategy =
  | 'accessibility id'  // ~selector
  | 'xpath'             // //selector
  | 'class name'        // .selector
  | 'id'                // #selector
  | '-android uiautomator'
  | '-ios predicate string'
  | '-ios class chain';

/**
 * Element state for assertions
 */
export type ElementState =
  | 'displayed'
  | 'enabled'
  | 'selected'
  | 'clickable'
  | 'focused';

/**
 * Swipe/scroll direction
 */
export type SwipeDirection = 'up' | 'down' | 'left' | 'right';

/**
 * Touch action types
 */
export type TouchActionType =
  | 'tap'
  | 'press'
  | 'longPress'
  | 'moveTo'
  | 'release'
  | 'wait';
