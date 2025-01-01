import { Location } from "react-router-dom";

/**
 * @description Properties required for navigation events including error handling and callbacks
 * @typedef NavigationProps
 */
export type NavigationProps = {
    pathname: string | Location<any>;
    error?: {
      message: string;
      code: number;
    }
    callback?: () => void;
    promiseFn?: () => Promise<void>;
};

/**
 * @description Queue of navigation events to be processed
 * @typedef NavigationQueue
 */
export type NavigationQueue = NavigationProps[]
