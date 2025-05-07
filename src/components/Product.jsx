import React from "react";
import cardimage from "../assets/productcardimage.png";
import ServiceCard from "./Card";

const Product = () => {
  return (
    <div className="xl:w-[75rem]  mx-auto pt-25 pb-[170px]">
      <div>
        <h2 className="text-center text-[#1A1A1A] font-pops font-semibold xl:text-[48px]">
          Ausgewählte Produkte
        </h2>
        <p className="text-[#666] text-center font-pops xl:text-[16px] mt-3">
          Entdecken Sie meine beliebten Produkte, <br /> die ich speziell für
          meine kunden anfertige
        </p>
        <div className="flex justify-center items-center mt-12 gap-6">
          <button className="rounded-full border-[1px] border-[#808080] px-5 py-2 text-base font-medium font-mon  ">
            alle
          </button>{" "}
          <button className="rounded-full border-[1px] border-[#808080] px-5 py-2 text-base font-medium font-mon  ">
            Beliebt
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-9 mt-9 ">
        <ServiceCard cardimage={cardimage} title={"Glückliche Familie"} />
        <ServiceCard cardimage={cardimage} title={"Glückliche Familie"} />
        <ServiceCard cardimage={cardimage} title={"Glückliche Familie"} />
        <ServiceCard cardimage={cardimage} title={"Glückliche Familie"} />
        <ServiceCard cardimage={cardimage} title={"Glückliche Familie"} />
        <ServiceCard cardimage={cardimage} title={"Glückliche Familie"} />
      </div>
    </div>
  );
};

export default Product;
