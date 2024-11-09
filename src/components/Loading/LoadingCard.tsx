const LoadingCard = () => {
  return (
    <div className="h-[420px] w-72 animate-pulse rounded-lg border shadow-lg md:w-full">
      <div className="mt-2 flex w-full justify-center">
        <div className="h-52 w-52 rounded bg-light_gray"></div>
      </div>
      <div className="mt-2 flex flex-col gap-2 p-2">
        <div className="h-1 w-full rounded bg-light_gray"></div>
        <div className="h-1 w-10/12 rounded bg-light_gray"></div>
        <div className="h-1 w-11/12 rounded bg-light_gray"></div>
        <div className="h-1 w-full rounded bg-light_gray"></div>
        <div className="h-1 w-10/12 rounded bg-light_gray"></div>
        <div className="h-1 w-11/12 rounded bg-light_gray"></div>
        <div className="h-1 w-10/12 rounded bg-light_gray"></div>
      </div>
      <div className="flex flex-auto flex-col justify-end px-2 pb-2">
        <div className="my-2 h-9 w-full rounded bg-light_gray"></div>
        <div className="h-9 w-full rounded bg-light_gray"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
