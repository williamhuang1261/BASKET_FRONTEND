import { ListNode } from "../classes/LinkedList";

export type NavigationProps = {
  /** The target path or location to navigate to */
  pathname: string;
  /** Error information if navigation fails */
  error?: {
    /** Error message to display */
    message: string;
    /** Error code for identifying the type of error */
    code: number;
    /** Optional flag to hide the home button */
    hideHome?: boolean;
  };
  /** Optional callback function to execute during navigation */
  callback?: () => void;
  /** Optional promise function to execute during navigation */
  promiseFn?: () => Promise<void>;
};

export type NavigationLinkedList = ListNode<NavigationProps>;

export type CustomLocationState = {
  paths: NavigationLinkedList | null;
  currErr: NavigationProps["error"] | null
};
