import useCustomNavigation from "../../../hooks/useCustomNavigation";
import { NavigationProps } from "../../../interface/NavigateProps";

/**
 * Props type extending NavigationProps and HTML div element attributes
 */
type Prop = NavigationProps & React.HTMLAttributes<HTMLDivElement>;

/**
 * A custom navigation component that handles direct navigation with additional functionality
 * @param {string} pathname - The target route path
 * @param {string} [error] - Optional error message to display
 * @param {Function} [callback] - Optional callback function to execute after navigation
 * @param {Function} [promiseFn] - Optional promise function to execute before navigation
 * @param {React.ReactNode} children - Child elements to render within the component
 * @param {React.HTMLAttributes<HTMLDivElement>} rest - Additional HTML div attributes
 * @returns {JSX.Element} A div element with navigation capabilities
 * @see useCustomNavigation.ts - For the custom navigation hook
 * @see NavigateProps.ts - For the navigation properties interface
 * @see directNav - For the navigation function
 * @example
 * <CustomDirectNav pathname='/'>Home</CustomDirectNav>
 * // is equivalent to
 * <div onClick={() => directNav({ pathname: '/' })}>Home</div>
 */
const CustomDirectNav = ({
  pathname,
  error,
  callback,
  promiseFn,
  children,
  ...rest
}: Prop) => {
  const { directNav } = useCustomNavigation();

  return (
    <div
      {...rest}
      onClick={() => directNav({ pathname, error, callback, promiseFn })}
    >
      {children}
    </div>
  );
};

export default CustomDirectNav;
