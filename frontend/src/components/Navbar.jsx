// src/components/Navbar.js

import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // The logo file path

const Navbar = () => {
  return (
    <div className="text-3xl">
      <div className="p-3 w-full max-w-[1280px] mx-auto px-4 md:px-[6%]">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
            <img
              className="block mx-auto h-10 w-auto"
              src={logo} // The logo file path
              alt="Logo"
            />
          </div>

          {/* Menu Items */}
          <div className="w-full md:w-3/4 flex justify-end gap-10 items-center">
            <div className="hidden md:block">
              <ul className="flex space-x-4 text-[16px] md:text-[18px]">
                <li className="cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/about">About</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/services">Service</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/news">News</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Search and Cart Icons */}
            <div className="flex items-center space-x-4">
              <IoIosSearch className="h-6 w-6 cursor-pointer" />
              <BsCart className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
