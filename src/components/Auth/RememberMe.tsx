interface Props {
  id: string
}

const RememberMe = ({id}: Props) => {
  return (
    <>
      <input type="checkbox" className="rounded border p-1" id={id} />
      <label htmlFor={id}>
        <h3>Remember me</h3>
      </label>
    </>
  );
};

export default RememberMe;
