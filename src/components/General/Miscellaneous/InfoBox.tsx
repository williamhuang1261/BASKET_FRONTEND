import { ImInfo } from "react-icons/im";
import { ReactNode, useState } from "react";
import { IoClose } from "react-icons/io5";
import Popup from "./Popup";

/**
 * @description A modal information box that displays additional details when clicked
 * @param {Object} props - The properties object
 * @param {ReactNode} props.children - The content to display in the info box
 * @param {number} props.iconSize - The size of the information icon
 * @param {string} props.title - The title displayed at the top of the info box
 * @returns {JSX.Element} An info icon that opens a modal with additional information
 */
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
        <ImInfo
          size={iconSize}
          className={`text-black transition-all duration-150 hover:text-green`}
        />
      </button>
      <Popup key={title + "_info_box"} openCondition={active}>
        <div
          className={`${active ? "no-doc-scroll" : ""} h-min w-60 overflow-hidden rounded bg-white md:w-96`}
        >
          <div className="grid grid-cols-3 bg-green/80 p-2">
            <h2 className="col-start-2 flex items-center justify-center text-lg font-semibold lg:text-xl">
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
      </Popup>
    </>
  );
};

export default InfoBox;
