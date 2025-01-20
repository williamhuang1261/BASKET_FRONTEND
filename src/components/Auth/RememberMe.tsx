import { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const RememberMe = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <input
        type="checkbox"
        className="rounded border p-1"
        id={props.id}
        ref={ref}
        {...props}
      />
      <label htmlFor={props.id}>
        <h3>Remember me</h3>
      </label>
    </>
  );
});

export default RememberMe;
