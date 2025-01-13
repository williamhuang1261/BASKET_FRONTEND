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
      <div className="flex justify-between py-1 gap-2">
        <label htmlFor={id}>
          <h3 className="font-semibold">{title}</h3>
        </label>
        {showForgot && (
          <button>
            <h3 className="text-black/50 underline hover:text-black transition-all duration-150 ease-in-out">Forgot Password?</h3>
          </button>
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
        className="w-full rounded border p-2"
      />
    </>
  );
};

export default PasswordBox;
