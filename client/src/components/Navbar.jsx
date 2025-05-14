import { HiMenuAlt4 } from "react-icons/hi";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
const NavBarItem = ({ title, className }) => (
    <li className={`mx-4 cursor-pointer ${className}`}>{title}</li>
  );
  
  const menuItems = ["Market", "Exchange", "Tutorials", "Wallets"];
  
  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <nav className="w-full flex md:justify-center justify-between items-center p-4  darkbg">
        <div className="md:flex-[0.5] flex-initial justify-center items-center ">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
  
        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {menuItems.map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
          </li>
        </ul>
  
        <div className="flex relative md:hidden">
          {isMenuOpen ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
  
          {isMenuOpen && (
            <ul
              className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setIsMenuOpen(false)} />
              </li>
              {menuItems.map((item, index) => (
                <NavBarItem key={item + index} title={item} className="my-2 text-lg" />
              ))}
            </ul>
          )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;
