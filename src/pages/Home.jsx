import React from "react";
import Banner from "../components/Banner";
import Product from "../components/Product";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <Product />
      <About />
      <p className="font-pops text-sm text-[#000] text-center mt-25 mb-6 ">
        Copyright © 2025.KREATIV HAUS. All right reserved
      </p>
    </div>
  );
};

export default Home;
