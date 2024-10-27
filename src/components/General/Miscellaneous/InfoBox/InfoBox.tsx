import { ImInfo } from "react-icons/im";
import { ReactNode, useState } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  children: ReactNode;
  iconSize: number;
  title: string;
}

const InfoBox = ({ children, iconSize, title }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        onClick={() => setActive(true)}
        className=""
        key={title + "_info_button"}
      >
        <ImInfo size={iconSize} className={` text-black hover: transition-all duration-150`}/>
      </button>
      <div
        key={title + "_info_box"}
        className={`${
          active
            ? "no-doc-scroll z-50 h-screen w-screen  bg-dark_gray/50"
            : "hidden"
        } fixed left-0 top-0 flex items-center justify-center`}
      >
        <div className="h-min w-60 overflow-hidden rounded bg-white md:w-96">
          <div className="grid grid-cols-3 bg-green/80 p-2">
            <h2 className=" col-start-2 flex items-center justify-center text-lg font-semibold lg:text-xl">
              {title}
            </h2>
            <div className="flex w-full items-center justify-end">
              <button onClick={() => setActive(false)}>
                <IoClose size={30} className="text-black/50 hover:text-black" />
              </button>
            </div>
          </div>
          <p className="p-2">{children}</p>
        </div>
      </div>
    </>
  );
};

export default InfoBox;
