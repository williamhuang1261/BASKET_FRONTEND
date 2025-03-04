import CustomDirectNav from "../General/Miscellaneous/CustomDirectNav";

interface Props {
  id: string;
  value: string;
  showForgot: boolean;
  title: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect?: () => void;
}
const PasswordBox = ({
  id,
  value,
  showForgot,
  title,
  placeholder,
  onChange,
  onSelect,
}: Props) => {

  return (
    <>
      <div className="flex justify-between gap-2 py-1">
        <label htmlFor={id}>
          <h3 className="font-semibold">{title}</h3>
        </label>
        {showForgot && (
          <CustomDirectNav
            pathname="/auth/reset-request"
            aria-label="Reset Password"
            type="button"
          >
            <h3 className="text-black/50 underline transition-all hover:text-black">
              Forgot Password?
            </h3>
          </CustomDirectNav>
        )}
      </div>
      <input
        type="password"
        id={id}
        value={value}
        onChange={onChange}
        onSelect={onSelect}
        required
        placeholder={placeholder}
        className="w-full rounded-sm border border-gray-200 p-2"
      />
    </>
  );
};

export default PasswordBox;
