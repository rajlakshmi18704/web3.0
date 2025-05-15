import { HiMenuAlt4 } from "react-icons/hi";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png";
import {
  FaHome,
  FaHistory,
  FaWallet,
  FaBars,
  FaTimes,
  FaEthereum,
  FaSignOutAlt,
  FaArrowRight,
  FaInfoCircle,
} from "react-icons/fa";
const NavBarItem = ({ title, className }) => (
    <li className={`mx-4 cursor-pointer ${className}`}>{title}</li>
  );
  
  // const menuItems = ["Market", "Exchange", "Tutorials", "Wallets"];
  //   const navItems = [
  //   { name: "Home", icon: FaHome, href: "#" },
  //   { name: "Transactions", icon: FaHistory, href: "#transactions" },
  //   {name:"market", icon: FaWallet, path: "/market"},
  // ];
  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    return (
      <nav className="w-full flex md:justify-center justify-between items-center p-4  darkbg">
        <div className="md:flex-[0.5] flex-initial justify-center items-center ">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
  
     <ul className="text-white md:flex hidden list-none flex-row items-center space-x-4">
      <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition-colors">
 <FaHome  className="text-lg"/>
      <li    className="group flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition-colors">Home</li>
      </div>
   
  
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition-colors">
   
      <FaWallet/>
        <li    className="group flex items-center space-x-2 cursor-pointer
         hover:text-blue-400 transition-colors">Transactions</li>
        </div>
     <div>
  <li className="group flex items-center space-x-2 cursor-pointer
         hover:text-blue-400 transition-colors"  onClick={() => navigate('/market')}>Market</li>
     </div>
    
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
            // <ul
            //   className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl list-none
            //   flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            // >
            //   <li className="text-xl w-full my-2">
            //     <AiOutlineClose onClick={() => setIsMenuOpen(false)} />
            //   </li>
            //   {menuItems.map((item, index) => (
            //     <NavBarItem key={item + index} title={item} className="my-2 text-lg" />
            //   ))}
            // </ul>
              <ul className="text-white md:flex hidden list-none flex-row items-center space-x-4">
      <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition-colors">
 <FaHome  className="text-lg"/>
      <li    className="group flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition-colors">Home</li>
      </div>
   
  
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition-colors">
   
      <FaWallet/>
        <li    className="group flex items-center space-x-2 cursor-pointer
         hover:text-blue-400 transition-colors">Transactions</li>
        </div>
     <div>
  <li className="group flex items-center space-x-2 cursor-pointer
         hover:text-blue-400 transition-colors"  onClick={() => navigate('/market')}>Market</li>
     </div>
    
     </ul>
          )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;
