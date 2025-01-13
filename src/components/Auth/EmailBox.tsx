interface Props {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailBox = ({ id, value, onChange }: Props) => {
  return (
    <>
      <label htmlFor={id} className="py-1">
        <h3 className="font-semibold">Email</h3>
      </label>
      <input
        type="email"
        id={id}
        value={value}
        onChange={onChange}
        required
        placeholder="Enter you email"
        className="w-full rounded border p-2"
      />
    </>
  );
};

export default EmailBox;
