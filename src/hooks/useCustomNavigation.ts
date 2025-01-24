import { useLocation, useNavigate } from "react-router-dom";
import {
  CustomLocationState,
  NavigationProps,
} from "../interface/NavigateProps";
import { ListNode } from "../classes/LinkedList";
import useError, { GenericError } from "./useError";
import { FirebaseError } from "firebase/app";
import { AxiosError } from "axios";

/**
 * Custom hook for managing navigation state and transitions
 * @returns {Object} An object containing navigation utilities
 * @returns {(info: NavigationProps, functions?: NavFunctions) => void} add - Adds a new navigation state
 * @returns {(reload?: boolean) => Promise<void>} nav - Executes the navigation chain
 * @returns {(info: NavigationProps, reload?: boolean) => Promise<void>} directNav - Directly navigates to a new path
 * @example
 * const { add, clear, nav } = useCustomNavigation();
 */
const useCustomNavigation = () => {
  const navigate = useNavigate();
  const errHandler = useError();
  const location = useLocation();

  const clear = () => {
    location.state = null;
    return;
  };

  interface NavFunctions {
    name: string;
    callback?: () => void;
    promiseFn?: () => Promise<void>;
  }

  /**
   * Adds a new navigation state to the chain and optionally registers navigation event handlers
   * @param {NavigationProps} info - Navigation information including pathname and error details
   * @param {NavFunctions} [functions] - Optional callbacks and promise functions to execute during navigation
   * @throws {Error} When promise function execution fails
   * @example
   * add({
   *   pathname: '/',
   *   error: {
   *     message: 'Error occurred',
   *     code: 404,
   *     hideHome: false
   *   },
   *  customEvent: 'customEventName'
   * }, {
   *   name: 'customEventName',
   *   callback: () => console.log('Custom event triggered'),
   *   promiseFn: async () => await fetchData()
   * });
   */
  const add = (info: NavigationProps, functions?: NavFunctions) => {
    const fnHandler = async (functions: NavFunctions) => {
      if (functions.callback) functions.callback();
      if (functions.promiseFn) {
        try {
          await functions.promiseFn();
        } catch (err) {
          errHandler(err as FirebaseError | GenericError | AxiosError);
        }
      }
      document.removeEventListener(functions.name, () => fnHandler(functions));
      return;
    };

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
      if (!location.state.pendingFn?.includes(functions.name))
        document.addEventListener(functions.name, () => fnHandler(functions));
      if (!location.state.pendingFn)
        location.state.pendingFn = [functions.name];
      else location.state.pendingFn.push(functions.name);
    }
  };

  /**
   * Executes the navigation chain with pending functions and error handling
   * @param {boolean} [reload] - Optional flag to reload the page after navigation
   * @param {boolean} [blockAutoReload] - Optional flag to prevent auto-reload on same path
   * @returns {Promise<void>} Resolves when navigation is complete
   * @throws {Error} When navigation state is invalid
   * @example
   * await nav();
   */
  const nav = (reload?: boolean, blockAutoReload?: boolean) => {
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
    if (value.pathname === location.pathname && !blockAutoReload) {
      window.location.reload();
      return;
    }
    navigate(value.pathname, {
      state: {
        paths: paths.next,
        currErr: value.error || null,
        pendingFn: pendingFn,
      },
    });
    if (reload) window.location.reload();
  };

  /**
   * Directly navigates to a new path by clearing current state and creating a new navigation chain
   * @param {NavigationProps} info - Navigation information including pathname and error details
   * @param {boolean} [reload] - Optional flag to reload the page after navigation
   * @param {boolean} [blockAutoReload] - Optional flag to prevent auto-reload on same path
   * @returns {Promise<void>} Resolves when navigation is complete
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
   * }, false, false);
   */
  const directNav = async (
    info: NavigationProps,
    reload?: boolean,
    blockAutoReload?: boolean,
  ) => {
    clear();
    add(info);
    nav(reload, blockAutoReload);
  };

  return { add, nav, directNav };
};

export default useCustomNavigation;
