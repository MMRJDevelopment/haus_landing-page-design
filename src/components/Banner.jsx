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
        <div className="xl:w-[75rem] px-4 md:px-8 sm:px-6 lg:px-10 xl:px-0  mx-auto">
          <div className="flex justify-center items-center">
            <img src={logo} className="w-[150px] py-3 " alt="" />
          </div>
          <div className="flex justify-between items-center pt-[50px] flex-wrap">
            <div>
              <h1 className="xl:w-[590px] font-pops font-bold xl:text-[56px]/16 text-[#0D0D0D] text-2xl text-center sm:text-start  sm:text-4xl sm:w-[80%] md:w-[90%] md:text-[40px]/12 lg:text-[48px]/16 lg:w-[70%]  ">
                Handgemachte Drahtkunst, die aus der Seele spricht
              </h1>
              <p className="xl:w-[590px] text-[#777] font-pops  pt-4 text-sm text-center sm:text-base sm:w-[80%] lg:w-[70%]  sm:text-start">
                Entdecken Sie einzigartige, handgefertigte Drahtkunstwerke, die
                Ihrem Raum Kreativität und Wärme verleihen.
              </p>
              <div className="flex justify-center sm:justify-start items-center sm:items-start mt-6 sm:my-6 xl:mt-10">
                <button className="btn-primary  ">
                  Kontaktieren Sie mich
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 rounded-[4px] justify-center items-center">
                <div className="xl:w-[208px]  xl:h-[172px]  rounded-[5px] hover:scale-110 lg:hover:scale-107   duration-700 ease-in-out">
                  <img src={bannerimg1} alt="" />
                </div>
                <div className="xl:w-[208px] xl:h-[272px] rounded-[5px] hover:scale-108 lg:hover:scale-107  duration-700 ease-in-out">
                  <img src={bannerimg2} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="xl:w-[285px] xl:h-[272px] rounded-[5px] hover:scale-107 lg:hover:scale-105  duration-700 ease-in-out">
                  <img src={bannerimg3} alt="" />
                </div>
                <div className="xl:w-[285px] xl:h-[172px] rounded-[5px] hover:scale-107 lg:hover:scale-105  duration-700 ease-in-out">
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
