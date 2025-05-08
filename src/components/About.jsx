import React from "react";
import about1 from "../assets/aboutme1.png";
import about2 from "../assets/aboutme2.png";
import about3 from "../assets/aboutme3.png";
import aboutbg from "../assets/aboutbg.png";

function About() {
  return (
    <div className="xl:w-[75rem] flex px-4 md:px-8 sm:px-6 lg:px-10 xl:px-0  mx-auto  flex-col lg:flex-row">
      <div className="lg:w-1/2 ">
        <div className="flex justify-between items-center xl:h-[422px]">
          <div className="w-[194px] h-[422px] rounded-[12px] hover:scale-95  duration-700 ease-in-out">
            <img
              src={about1}
              className="w-full h-full bg-cover bg-center "
              alt=""
            />
          </div>
          <div className="w-[195px] h-[346px] hover:h-[422px]  rounded-[12px]  duration-700 ease-in-out overflow-hidden">
            <img
              src={about2}
              className="w-full h-[422px] bg-cover bg-center "
              alt=""
            />
          </div>
          <div className="w-[194px] h-[422px] rounded-[12px] hover:scale-95  duration-700 ease-in-out">
            <img
              src={about3}
              alt=""
              className="w-full h-[422px] bg-cover bg-center "
            />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-11 pt-6 sm:pt-0 relative">
        <div className="z-10 sm:mt-6">
          {" "}
          <h2 className="text-[#1A1A1A] font-pops  font-medium xl:text-[48px]">
            Über mich
          </h2>
          <p className="text-[#656565] font-pops text-sm">
            Schön, Bist Du auf meiner Seite gelandet! <br />
            <br />
            mein Name ist Sibylle Wey. Ich bin 34 Jahre alt und wohne im schönen
            Winterthur. Als leidenschaftliche Mutter zweier wundervoller Mädchen
            gestalte ich meinen Alltag oft bunt und abwechslungsreich. Ich
            arbeite im Gesundheitswesen, wo ich täglich die Möglichkeit habe,
            mit Menschen zusammenzuarbeiten und sie in verschiedenen
            Lebenssituationen zu unterstützen. Neben Beruf und Familie gilt
            meine grosse Leidenschaft der kreativen Arbeit. In meiner Freizeit
            tauche ich gerne in verschiedene künstlerische Bereiche ein, sei es
            Malerei, Basteln oder andere kreative Ausdrucksformen. Es ist für
            mich eine wertvolle Gelegenheit, meiner Fantasie freien Lauf zu
            lassen und mich in meiner eigenen kreativen Welt zu verlieren.
            Einige dieser Werke möchte ich nun mit euch teilen.
          </p>
          <div className="mt-6 md:ml-4 flex justify-center md:justify-start">
            {" "}
            <button className="btn-primary   ">Kontaktieren Sie mich</button>
          </div>
        </div>
        <div className=" absolute xl:-bottom-20 bottom-0 sm:-bottom-10   xl:-right-10 -z-10">
          <img src={aboutbg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
