import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import BasketLogo from "../../assets/BasketLogoIcon.svg";
import StarReviews from "./StarReviews";

interface Props {
  color?: string;
  image?: string;
}

const ItemDetailBoxFooterAd = ({ color }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-7">
      <div
        className={`flex h-full w-full flex-col items-center rounded-b border-x border-b border-gray-200 px-2 inset-shadow-sm ${open ? "pb-2" : "pb-0"}`}
        style={{
          backgroundColor: color,
        }}
      >
        <div
          className="flex w-full cursor-pointer justify-between"
          onClick={() => setOpen(!open)}
        >
          <p className="text-sm font-semibold text-gray-500">
            Profitez de notre nouveau programme de fidélité! Cliquez ici pour en
            savoir plus.
          </p>
          <button className="hover:text-green text-sm font-semibold underline">
            <BiPlus size={15} />
          </button>
        </div>
        <div
          className={`grid overflow-hidden rounded-sm bg-white p-1 transition-all ${open ? "grid-rows-[1fr] py-2 opacity-100" : "grid-rows-[0fr] py-0 opacity-0"}`}
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

const ItemDetailBoxMainAd = ({ image }: Props) => {
  return (
    <div className="flex items-center justify-between rounded-t-sm border border-gray-200 p-2 shadow">
      <div className="h-full">
        <img src={image || BasketLogo} className="w-24 object-contain" />
        <StarReviews rating={5} />
      </div>
      <div className="h-full max-w-1/3">
        <h3 className="font-righteous">Économisez 15 %</h3>

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
      <div className="h-full max-w-1/3">
        <div className="flex h-full flex-col items-center">
          <h1 className="text-lg font-bold">Exclusivité</h1>
          <p className="text-sm font-semibold">
            <div className="flex items-end gap-2">
              <span className="font-righteous text-2xl text-purple-900">
                0.99 $ / lb
              </span>
              <span className="text-gray-500">2.18 $ / kg</span>
            </div>
          </p>
          <p className="text-gray-700">Membres seulement</p>
        </div>
      </div>
    </div>
  );
};

const ItemDetailBoxAd = ({ image, color }: Props) => {
  return (
    <div className="">
      <ItemDetailBoxMainAd image={image} />
      <ItemDetailBoxFooterAd color={color} />
    </div>
  );
};

export default ItemDetailBoxAd;
