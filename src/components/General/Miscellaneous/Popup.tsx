/**
 * Props for the Popup component.
 * @extends React.HTMLProps<HTMLDivElement>
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
  /** Controls the visibility of the popup */
  openCondition: boolean;
}

/**
 * A modal popup component that overlays the entire screen.
 *
 * @param props - Component props
 * @param props.children - Content to be displayed inside the popup
 * @param props.open - Boolean to control popup visibility
 * @param props.className - Additional CSS classes
 * @returns A modal popup container with fade transitions
 */
const Popup = ({ children, openCondition, className, ...rest }: Props) => {
  return (
    <div
      className={`${className} ${openCondition ? "no-doc-scroll pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50 p-2 transition-all duration-150`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Popup;
