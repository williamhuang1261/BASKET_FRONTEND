const AccountBox = () => {
  return (
    <div className="flex flex-col gap-5">
      <button className="w-full rounded border bg-red-100 transition-all duration-100 ease-in-out hover:bg-red-500">
        Log out
      </button>
      <button className="w-full rounded border text-red-500">Delete Account</button>
    </div>
  );
};

export default AccountBox;
