import useUserState from "../../hooks/state/useUserState";

/**
 * @description Displays the user's profile information in a styled box
 * @returns {JSX.Element} A section containing the user's greeting and name
 */
const ProfileBox = () => {
  const { user } = useUserState();
  return (
    <section className="flex h-28 items-center justify-center rounded-sm bg-green/80 shadow-md">
      <h1 className="text-center text-xl font-bold lg:text-2xl">
        Hello <br />
        {user.meta.name}
      </h1>
    </section>
  );
};

export default ProfileBox;
