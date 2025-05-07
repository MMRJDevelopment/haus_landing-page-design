import React from "react";

const Card = ({ cardimage, title }) => {
  return (
    <div className="w-[387px] h-[573px] rounded-[10px] card ">
      <div className="w-full  h-[271px]">
        <img
          src={cardimage}
          className="bg-cover bg-center bg-no-repeat rounded-t-[10px]"
          alt=""
        />
      </div>
      <div className="px-6 pb-6 pt-5">
        <div className="flex justify-between items-start">
          {" "}
          <h5 className="tex-base font-medium text-[#000] font-pops">
            {title}
          </h5>{" "}
          <div className="flex gap-2">
            <div className="w-[50px] h-[50px] p-[11px] flex justify-center items-center flex-col bg-[#E5E2C4] card-size">
              <p className="font-pops text-[#4D4D4D] text-[9px] ">small</p>
              <h6 className="text-[#1A1A1A] font-pops font-bold text-[14.286px]">
                30
              </h6>
            </div>
            <div className="w-[50px] h-[50px] p-[11px] flex justify-center items-center flex-col bg-[#E5E2C4] card-size">
              <p className="font-pops text-[#4D4D4D] text-[9px] ">Medium</p>
              <h6 className="text-[#1A1A1A] font-pops font-bold text-[14.286px]">
                40
              </h6>
            </div>
            <div className="w-[50px] h-[50px] p-[11px] flex justify-center items-center flex-col bg-[#E5E2C4] card-size">
              <p className="font-pops text-[#4D4D4D] text-[9px] ">larger </p>
              <h6 className="text-[#1A1A1A] font-pops font-bold text-[14.286px]">
                50
              </h6>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <h6 className="font-bold text-sm font-pops text-[#000]">
            Beschreibung{" "}
          </h6>
          <ul className="font-pops text-[12px] text-[#333] list-disc pl-4 ">
            <li className="pt-3">
              Die Figuren können persönlich abgeholt werden.
            </li>
            <li className="py-3">
              Gegen Aufpreis erfolgt der Versand überall in der Schweiz.
            </li>
            <li>
              Die Drahtfiguren werden individuell nach Kundenwunsch gefertigt.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <button className="card-btn">Kontaktieren Sie mich</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
