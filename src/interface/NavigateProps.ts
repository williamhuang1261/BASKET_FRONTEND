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
  /** Optional flag for a custom Event (event listeners) */
  customEvent?: string;
};

type NavigationLinkedList = ListNode<NavigationProps>;
type CustomLocationState = {
  paths: NavigationLinkedList | null;
  currErr: NavigationProps["error"] | null;
  pendingFn: string[];
};

export type { NavigationLinkedList, CustomLocationState };
