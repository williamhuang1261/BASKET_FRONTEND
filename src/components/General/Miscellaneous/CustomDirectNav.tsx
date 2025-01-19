import useCustomNavigation from "../../../hooks/useCustomNavigation";
import { NavigationProps } from "../../../interface/NavigateProps";

type Prop = NavigationProps & React.HTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Custom button component that handles navigation with optional callbacks and error handling
 * @param {Object} props - Component properties
 * @param {string} props.pathname - Target route path
 * @param {string} [props.error] - Error message to display if navigation fails
 * @param {Function} [props.callback] - Function to execute after successful navigation
 * @param {Function} [props.promiseFn] - Promise to resolve before navigation
 * @param {React.ReactNode} props.children - Button content
 * @returns {JSX.Element} Navigation button
 * @example
 * <CustomDirectNav pathname='/'>Home</CustomDirectNav>
 * // is equivalent to
 * <button onClick={() => directNav({ pathname: '/' })}>Home</button>
 */
const CustomDirectNav = ({
  type,
  pathname,
  error,
  children,
  customEvent,
  ...rest
}: Prop) => {
  const { directNav } = useCustomNavigation();

  return (
    <button
      {...rest}
      type={type}
      onClick={() => directNav({ pathname, error, customEvent })}
    >
      {children}
    </button>
  );
};

export default CustomDirectNav;
