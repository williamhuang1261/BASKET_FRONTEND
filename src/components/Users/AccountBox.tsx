const AccountBox = () => {
  return (
    <div className="flex flex-col gap-5">
      <button className="shadow-md w-full rounded bg-red-100 transition-all duration-150 ease-in-out hover:bg-red-500">
        Log out
      </button>
      <button className="w-full outline outline-2 outline-red-500 rounded hover:bg-red-500 hover:shadow-md hover:text-black text-red-500 shadow-sm transition-all duration-150 ease-in-out">Delete Account</button>
    </div>
  );
};

export default AccountBox;
