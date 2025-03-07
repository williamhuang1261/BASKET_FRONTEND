import { categoriesType } from "../../data/Categories";
import { NameProp, RefProp } from "../../interface/Destructed";

interface Props {
  name: NameProp;
  description?: {
    en: string;
    fr: string;
  };
  categories: categoriesType[];
  image: string;
  ref: RefProp;
  [key: string]: any;
}

const ItemInformationBox = ({
  name,
  description,
  categories,
  image,
  ref,
}: Props) => {
  return (
    <div className="flex gap-5 w-full h-full">
      <img
        alt={"test_image"}
        src={image}
        className="h-52 w-52 rounded-sm object-contain"
      />
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-2xl font-bold">{name.en}</h1>
          <p>{description?.en}</p>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-bold">Categories: </h3>
          <span>{categories.join(", ")}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-bold">Size: </h3>
          <p>{name.size}</p>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-bold">{ref.standard}:</h3>
          <p>{ref.code}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemInformationBox;
