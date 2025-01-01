import { useNavigate } from "react-router-dom";
import { NavigationProps, NavigationQueue } from "../interface/NavigateProps";

// TODO - Implement useCustomNavigate hook
/**
 * @description Hook for handling navigation with queued routes
 * @returns {(queue: NavigationQueue, add: NavigationProps) => void} Navigation function that processes queue
 * @summary Manages navigation queue and executes callbacks during navigation
 */
const useCustomNavigate = () => {
  const navigate = useNavigate();

  return (queue: NavigationQueue, add: NavigationProps) => {
    const elem = queue.shift();
    const dest = elem?.pathname || "/";
    navigate(dest, {
      state: queue,
    });
    if (elem?.callback) {
      elem.callback();
    }
    if (elem?.promiseFn) {
      elem.promiseFn();
    }
  };
};

export default useCustomNavigate;
