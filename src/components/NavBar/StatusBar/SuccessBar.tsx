import useStatusState from "../../../hooks/state/useStatusState";

interface Props {
  size: "Full" | "Container";
}

const SuccessBar = ({ size }: Props) => {
  const { status } = useStatusState();

  return (
    <div className="fixed top-0 z-[100] w-full bg-green">
      <div
        className={`${status.succes.show ? "pointer-events-auto h-min translate-y-0 opacity-100" : "pointer-events-none h-0 -translate-y-1 opacity-0"} ${size === "Container" ? "px-3 md:container md:mx-auto lg:px-20 2xl:px-44 3xl:px-64" : "px-3 "} flex items-center justify-between transition-all`}
      >
        <h3 className="">Success: {status.succes.message}</h3>
      </div>
    </div>
  );
};

export default SuccessBar;
