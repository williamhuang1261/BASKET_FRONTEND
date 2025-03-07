// interface Props {
//   [key: string]: any;
// }

import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import BasketLogo from "../../assets/BasketLogo.svg";

const headers = ["Store", "", "Price", "Unit", "Amount", "Total", ""];

const testData = Array.from({ length: 10 }, (_, index) => ({
  supplier: `Grocery ${index + 1}`,
  price: 10,
  unit: "kg",
  amount: 1,
  total: 10,
  exlusivity: index % 2 === 0 ? true : false,
  logo: BasketLogo,
}));

const PricingListing = () => {
  return (
    <div className="grid grid-cols-7">
      {headers.map((header, index) => (
        <div key={index} className="col-span-1 text-lg font-bold">
          {header}
        </div>
      ))}
      {testData.map((data, index) => (
        <React.Fragment key={index}>
          <div className="col-span-1">{data.supplier}</div>
          <div className="col-span-1 flex">
            <img src={data.logo} alt="logo" className="h-full w-11" />
          </div>
          <div className="col-span-1">{data.price}</div>
          <div className="col-span-1">{data.amount}</div>
          <div className="col-span-1">{data.unit}</div>
          <div className="col-span-1">{data.total}$</div>
          <div className="col-span-1">
            {data.exlusivity && <RiVerifiedBadgeFill />}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PricingListing;
