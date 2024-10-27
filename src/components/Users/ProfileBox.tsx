import useUserState from "../../hooks/state/useUserState";

const ProfileBox = () => {
  const { user } = useUserState();
  return (
    <section className="flex h-28 items-center justify-center rounded bg-green/80">
      <h1 className="text-center text-2xl font-bold lg:text-3xl">
        Hello <br />
        {user.meta.name}
      </h1>
    </section>
  );
};

export default ProfileBox;
