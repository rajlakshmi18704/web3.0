import React from "react";

import logo from "../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32" /> */}
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        {/* <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p> */}
      </div>
    </div>

    {/* Logo and Text in one line */}
    <div className="flex justify-center items-center flex-col sm:flex-row gap-4 mt-5">
      <img
        src={logo}
        alt="logo"
        className="w-20 sm:w-24 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
      />
      <div className="flex flex-col items-center sm:items-start">
        <p className="text-white text-sm text-center sm:text-left">
          Come join us and hear for the unexpected miracle
        </p>
        <p className="text-white text-sm text-center sm:text-left font-medium mt-1">
          info@Solidipay.com
        </p>
      </div>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@Solidipay2025</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
