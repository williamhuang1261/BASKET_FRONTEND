import { useLocation, useNavigate } from "react-router-dom";
import {
  CustomLocationState,
  NavigationProps,
} from "../interface/NavigateProps";
import { ListNode } from "../classes/LinkedList";


interface NavFunctions {
  name: string;
  callback?: () => void;
  promiseFn?: () => Promise<void>;
}

const fnHandler = async (functions: NavFunctions) => {
  if (functions.callback) functions.callback();
  if (functions.promiseFn) {
    try {
      await functions.promiseFn();
    } catch (err) {
      console.error(err);
    }
  }
  document.removeEventListener(functions.name, fnHandler);
  return;
};

/**
 * Custom hook for managing navigation state and transitions
 * @returns {Object} Navigation utilities
 * @example
 * const { add, clear, nav } = useCustomNavigation();
 */
const useCustomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const clear = () => {
    if (location.state && location.state?.pendingFn) {
      location.state.pendingFn.forEach((fn: string) => {
        document.removeEventListener(fn, fnHandler);
      });
    }
    location.state = null;
    return;
  };


  /**
   * @description Adds a new navigation state to the chain
   * @param {NavigationProps} info - Navigation information
   * @example
   * add({
   *   pathname: '/',
   *   callback: () => console.log('Navigating...'),
   *   promiseFn: async () => await fetchData(),
   *   error: {
   *     message: 'Error occurred',
   *     code: 404,
   *     hideHome: false
   *   }
   * });
   */
  const add = (info: NavigationProps, functions?: NavFunctions) => {
    const state: CustomLocationState | null | undefined = location.state;
    if (!state) {
      location.state = {
        paths: new ListNode<NavigationProps>(info),
        currErr: null,
      } as CustomLocationState;
    } else if (!state.paths) {
      location.state.paths = new ListNode<NavigationProps>(info);
    } else {
      location.state.paths.append(info);
    }

    if (functions) {
      
      if (!location.state.pendingFn.includes(functions.name))
        document.addEventListener(functions.name, fnHandler);
    }
  };

  /**
   * @description Executes the navigation chain
   * @summary Executes in the following order
   *  - Path verification / Home redirection
   *  - Callback function
   *  - Promise function
   *  - If current path is the same as the next path, reload the page
   *  - Navigation
   *  - Error handling
   *  - Page reload (If applicable)
   * @example
   * await nav();
   */
  const nav = async (reload?: boolean) => {
    const state: CustomLocationState | null | undefined = location.state;
    if (!state) {
      navigate("/");
      return;
    }
    const paths = state.paths;
    if (!paths) {
      navigate("/");
      return;
    }
    const value = paths.value;
    if (!value) {
      navigate("/");
      return;
    }
    let pendingFn = state.pendingFn;
    if (value.customEvent) {
      document.dispatchEvent(new CustomEvent(value.customEvent));
      pendingFn = pendingFn.filter((fn) => fn !== value.customEvent);
    }
    if (value.pathname === location.pathname) {
      window.location.reload();
      return;
    }
    navigate(value.pathname, {
      state: {
        paths: paths.next,
        currErr: value.error,
        pendingFn: pendingFn,
      },
    });
    if (reload) window.location.reload();
  };

  /**
   * @description Directly navigates to a new path
   * @param {NavigationProps} info - Navigation information
   * @example
   * directNav({
   *   pathname: '/',
   *   callback: () => console.log('Navigating...'),
   *   promiseFn: async () => await fetchData(),
   *   error: {
   *     message: 'Error occurred',
   *     code: 404,
   *     hideHome: false
   *   }
   * });
   */
  const directNav = async (info: NavigationProps, reload?: boolean) => {
    clear();
    add(info);
    await nav(reload);
  };

  return { add, nav, directNav };
};

export default useCustomNavigation;
