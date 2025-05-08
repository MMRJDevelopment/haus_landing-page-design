import React from "react";
import cardimage from "../assets/productcardimage.png";
import ServiceCard from "./Card";

const Product = () => {
  return (
    <div className="xl:w-[75rem] px-4 md:px-8 sm:px-6 lg:px-10 xl:px-0 mx-auto xl:pt-25 pt-10 xl:pb-[170px] pb-10 ">
      <div>
        <h2 className="text-center text-[#1A1A1A] font-pops font-semibold xl:text-[48px] text-2xl">
          Ausgewählte Produkte
        </h2>
        <p className="text-[#666] text-center font-pops xl:text-[16px] text-sm mt-3">
          Entdecken Sie meine beliebten Produkte, <br /> die ich speziell für
          meine kunden anfertige
        </p>
        <div className="flex justify-center items-center  mt-6 xl:mt-12 gap-6">
          <button className="rounded-full border-[1px] border-[#808080] px-5 py-2 text-base font-medium font-mon hover:bg-[#559E83] hover:border-white hover:text-white duration-700 ease-in-out  ">
            alle
          </button>{" "}
          <button className="rounded-full border-[1px] border-[#808080] px-5 py-2 text-base font-medium font-mon hover:bg-[#559E83] hover:border-white hover:text-white duration-700 ease-in-out  ">
            Beliebt
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-9 mt-9 ">
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
