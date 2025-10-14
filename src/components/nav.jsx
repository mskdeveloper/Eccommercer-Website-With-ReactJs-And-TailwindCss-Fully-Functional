import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiOutlineThunderbolt,
  AiOutlineUser,
  AiOutlineSend,
  AiOutlinePhone,
  AiOutlineFire,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [open, setOpen] = useState(false);

  const categories = [
    ["Smartphone"],
    ["Laptop"],
    ["Camera"],
    ["Headpgones"],
    ["Pc Gaming"],
    ["Tablets"],
    ["Television"],
  ];
  return (
    <nav className="w-full flex flex-col justify-center items-center relative">
      {/* Top Bar */}
      <div className="top-nav w-full flex justify-between items-center bg-black text-white px-[8%] lg:px-[12%] py-3 text-sm">
        <div className="flex w-1/2 gap-5 items-center">
          <div className="relative group">
            <div className="cursor-pointer flex items-center hover:text-yellow-600">
              English
              <span className="ml-1 text-xs">
                <AiFillCaretDown />
              </span>
              <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 hidden transition group-hover:flex flex-col gap-2 z-50">
                <li>Francais</li>
                <li>Deutsch</li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <span className="cursor-pointer flex items-center hover:text-yellow-600">
              USD
              <span className="ml-1 text-xs">
                <AiFillCaretDown />
              </span>
            </span>
            <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 hidden transition group-hover:flex flex-col gap-2 z-50">
              <li>USD</li>
              <li>EUR</li>
            </ul>
          </div>
          <p className="hide">Free Shipping On All Orders over $100</p>
        </div>
        <ul className="flex gap-5 w1/2 justify-end items-center">
          <li className="text-yellow-400 flex items-center gap-1">
            <AiOutlineThunderbolt />
            <a href="$">Flash Sale</a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center hover:text-yellow-400 transition"
            >
              <AiOutlineUser />
              Account Login
            </a>
          </li>
          <li>
            <Link
              href="#"
              className="flex gap-1 items-center hover:text-yellow-400 transition"
            >
              <AiOutlineSend />
              contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Middle Nav */}
      <div className="middle-nav container mt-2 w-full flex justify-between items-center px-[5%] lg:px-[12%] py-6 gap-10">
        <div className="w-1/5">
          <Link to="/">
            <h2 className="text-5xl font-bricolage text-black font-bold">
              tron <span className="text-yellow-500">Mart</span>
            </h2>
          </Link>
        </div>
        <div className="product-search flex items-center h-14 border-4 border-yellow-500 rounded-md w-1/2 overflow-hidden">
          <select className="bg-gray-100 font-semibold p-2 w-1/3 border-none outline-none">
            <option>All Categories</option>
            <option>Camera</option>
            <option>Accessories</option>
            <option>Camera and Lenses</option>
            <option>Drones</option>
            <option>Security Cameras</option>
            <option>Games</option>
          </select>
          <input
            type="text"
            placeholder="Search For Products"
            className="w-full px-3 py-2 outline-none font-medium bg-gray-100"
          />
          <button className="bg-yellow-500 text-white px-5 font-bold uppercase h-full">
            Search
          </button>
        </div>
        <div className="get-help flex gap-5 items-center w-1/3 justify-end">
          <div className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <AiOutlinePhone />
            </span>
            <div className="flex flex-col texr-sm">
              <span className="text-gray-500">Need Help?</span>
              <span className="text-yellow-600 font-bold">
                +98 917 644 8221
              </span>
            </div>
          </div>
          <Link to="/wishlist" className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <AiOutlineFire />
            </span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500">My</span>
              <span className="text-yellow-600 font-bold">Wishlist</span>
            </div>
          </Link>
          <Link to="/wishlist" className="flex gap-2 items-center">
            <span className="text-3xl text-gray-500">
              <AiOutlineShoppingCart />
            </span>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500">My</span>
              <span className="text-yellow-600 font-bold">Cart</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
