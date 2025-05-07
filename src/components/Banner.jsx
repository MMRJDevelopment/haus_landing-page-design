import React from "react";
import logo from "../assets/logo.png";
import bannerimg1 from "../assets/bannerimg1.png";
import bannerimg2 from "../assets/bannerimg2.png";
import bannerimg3 from "../assets/bannerimg3.png";
import bannerimg4 from "../assets/bannerimg4.png";
function Banner() {
  return (
    <div className="w-full xl:h-[649px] bg-[url('./assets/bannerbg.png')]  ">
      <div className="bg-[linear-gradient(180deg,_#E6E1C9_0%,_rgba(128,_125,_112,_0)_100%)] h-full w-full">
        <div className="xl:w-[75rem]  mx-auto">
          <div className="flex justify-center items-center">
            <img src={logo} className="w-[150px] py-3 " alt="" />
          </div>
          <div className="flex justify-between items-center pt-[50px]">
            <div>
              <h1 className="xl:w-[590px] font-pops font-bold xl:text-[56px] text-[#0D0D0D]">
                Handgemachte Drahtkunst, die aus der Seele spricht
              </h1>
              <p className="xl:w-[590px] text-[#777] font-pops xl:text-base pt-4">
                Entdecken Sie einzigartige, handgefertigte Drahtkunstwerke, die
                Ihrem Raum Kreativität und Wärme verleihen.
              </p>
              <button className="btn-primary mt-10 ">
                Kontaktieren Sie mich
              </button>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 rounded-[4px] justify-center items-center">
                <div className="w-[208px] h-[172px]  rounded-[5px] hover:scale-110  duration-700 ease-in-out">
                  <img src={bannerimg1} alt="" />
                </div>
                <div className="w-[208px] h-[272px] rounded-[5px] hover:scale-108  duration-700 ease-in-out">
                  <img src={bannerimg2} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="w-[285px] h-[272px] rounded-[5px] hover:scale-108  duration-700 ease-in-out">
                  <img src={bannerimg3} alt="" />
                </div>
                <div className="w-[285px] h-[172px] rounded-[5px] hover:scale-108  duration-700 ease-in-out">
                  <img src={bannerimg4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
