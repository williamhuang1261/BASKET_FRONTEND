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
    <div className="flex gap-5">
      <img
        alt={"test_image"}
        src={image}
        className="h-52 w-52 rounded-sm object-contain"
      />
      <div>
        <h1 className="text-xl font-bold">{name.en}</h1>
        <p>{description?.en}</p>
        <div className="flex gap-2">
          <h3>Categories: </h3>
          <span>{categories.join(", ")}</span>
        </div>
        <div className="flex gap-2">
          <h3>Size: </h3>
          <p>{name.size}</p>
        </div>
        <div className="flex gap-2">
          <h3>{ref.standard}:</h3>
          <p>{ref.code}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemInformationBox;
