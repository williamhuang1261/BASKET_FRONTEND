import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import BasketLogo from "../../assets/BasketLogoIcon.svg";
import { BsFillStarFill } from "react-icons/bs";

const ItemDetailBoxFooterSpecial = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-7">
      <div className="flex h-full w-full flex-col items-center rounded-b border-x border-b border-gray-200 bg-white px-2 inset-shadow-sm">
        <div
          className="flex w-full cursor-pointer justify-between"
          onClick={() => setOpen(!open)}
        >
          <p className="text-sm font-semibold text-gray-500">
            Des conditions s'appliquent. Cliquez ici pour en savoir plus.
          </p>
          <button className="hover:text-green text-sm font-semibold underline">
            <BiPlus size={15} />
          </button>
        </div>
        <div
          className={`grid overflow-hidden transition-all ${open ? "grid-rows-[1fr] py-2 opacity-100" : "grid-rows-[0fr] py-0 opacity-0"}`}
        >
          <p className="overflow-hidden text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            fuga vitae consectetur porro architecto tempora dicta quaerat et
            maxime praesentium pariatur dignissimos quod? Molestias, nisi cum, a
            enim quo voluptatum reiciendis expedita blanditiis ipsum dolorem
            fugit exercitationem aspernatur tempora nostrum officiis amet
            doloribus? Illo dolorum quas nemo repudiandae, quos unde adipisci
            nobis excepturi animi laboriosam at nihil dolores voluptas
            perspiciatis provident facilis, quod corporis neque laudantium omnis
            reprehenderit officiis, laborum praesentium sapiente? Doloremque
            minima quibusdam autem obcaecati voluptates esse voluptas sapiente
            animi, quod consequuntur nobis reiciendis veniam deserunt voluptatum
            molestiae quasi? Est ut odit veniam labore enim. Placeat, rerum
            repellendus fuga hic vel a quia ex quidem dolorum mollitia
            laboriosam, necessitatibus doloribus ipsam adipisci deleniti, velit
            odio. Neque velit autem ab quisquam, excepturi, nam reprehenderit
            aliquid ratione, eaque esse assumenda illum et magnam delectus
            cumque blanditiis provident tempore odit soluta laudantium alias
            veniam optio expedita molestiae? Atque ratione quod ad laboriosam
            fuga impedit beatae libero vel dolores, corporis temporibus
            perferendis ex est quia. Rerum, omnis vel excepturi voluptatem
            incidunt obcaecati! Ducimus dolor sunt porro quod doloribus, dolorem
            nulla facilis quia quisquam neque illo. Dolores odio ipsum rerum
            suscipit obcaecati, quibusdam a eum recusandae quia vitae aliquid
            eaque voluptatem blanditiis animi excepturi esse cum, optio neque
            quod nam consequatur eius veritatis quo voluptate? Quaerat nisi,
            totam asperiores eaque natus doloribus laboriosam. Aliquam placeat
            commodi deserunt ut pariatur quod, quaerat dolorum eaque praesentium
            sequi rem harum optio suscipit reprehenderit tempore expedita
            facilis, vel nulla eius, fugiat neque possimus. Optio fuga laborum
            cum.
          </p>
        </div>
      </div>
    </div>
  );
};

interface Props {
  image?: string;
}

const ItemDetailBoxMainSpecial = ({ image }: Props) => {
  return (
    <div className="flex items-center justify-between rounded-t-sm border border-gray-200 p-2 shadow">
      <div className="h-full">
        <img src={image || BasketLogo} className="w-24 object-contain" />
      </div>
      <div className="flex h-full max-w-1/3 gap-2">
        <div>
          <div>
            <h3 className="font-righteous">Économisez 15 %</h3>
          </div>
          <div className="flex items-end gap-2">
            <span className="font-righteous text-2xl text-red-500">
              1.99 $ / lb
            </span>
            <span className="text-gray-500">4.38 $ / kg</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-700 line-through">
              2.99 $ / lb | 6.58 $ / kg
            </span>
          </div>
        </div>
        <div className="cursor-pointer rounded-sm p-1 text-yellow-400 transition-all hover:bg-gray-300">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
      </div>
    </div>
  );
};

const ItemDetailBoxSpecial = ({ image }: Props) => {
  return (
    <div className="">
      <ItemDetailBoxMainSpecial image={image} />
      <ItemDetailBoxFooterSpecial />
    </div>
  );
};

export default ItemDetailBoxSpecial;
