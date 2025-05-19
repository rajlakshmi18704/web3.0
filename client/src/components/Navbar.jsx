import { HiMenuAlt4 } from "react-icons/hi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaHome,
  FaHistory,
  FaWallet,
} from "react-icons/fa";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white py-2 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo - No shift */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-16 object-contain" />
        </div>

        {/* Desktop Menu - Shifted down */}
        <ul className="hidden md:flex space-x-8 mt-6">
          <li
            className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition"
            onClick={() => navigate("/")}
          >
            <FaHome />
            <span className="mt-2">Home</span>
          </li>
          {/* <li
            className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition"
            onClick={() => navigate("/transactions")}
          >
            <FaHistory />
            <span className="mt-2">Transactions</span>
          </li> */}
          <li
            className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition"
            onClick={() => navigate("/market")}
          >
            <FaWallet />
            <span className="mt-2">Market</span>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <AiOutlineClose
              size={24}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <HiMenuAlt4
              size={24}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu - Shifting text down */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-6 font-medium">
          <li
            className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition"
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
          >
            <FaHome />
            <span className="mt-2">Home</span>
          </li>
          <li
            className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition"
            onClick={() => {
              navigate("/transactions");
              setIsMenuOpen(false);
            }}
          >
            <FaHistory />
            <span className="mt-2">Transactions</span>
          </li>
          <li
            className="flex items-center space-x-2 cursor-pointer hover:text-yellow-300 transition"
            onClick={() => {
              navigate("/market");
              setIsMenuOpen(false);
            }}
          >
            <FaWallet />
            <span className="mt-2">Market</span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
