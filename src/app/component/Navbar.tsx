"use client";
// import React from 'react'
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white  ">
      <div className="max-w-[1240px] py-[12px] flex justify-between text-center text-black mx-auto">
        <div className="font-semibold text-2xl ">Media<span className="text-orange-600">P</span>ro</div>
        {toggle ? (
          <IoClose
            onClick={() => setToggle(!toggle)}
            className=" text-2xl md:hidden block"
          />
        ) : (
         
          <div  onClick={() => setToggle(!toggle)}
          className=" text-2xl md:hidden block">
             <IoMenu/>
            
          </div>
        )}

        <ul className=" hidden md:flex gap-5 text-black">
          <li className=" hover:text-orange-600 font-semibold">
            <a href="/">Home</a>
          </li>
          <li className=" hover:text-orange-600 font-semibold">
            <a href="/">AboutUs</a>
          </li>
          <li className=" hover:text-orange-600 font-semibold ">
            <a href="/">Project</a>
          </li>
          <li className=" hover:text-orange-600 font-semibold">
            <a href="/">Contact</a>
          </li>
          <li className=" hover:text-orange-600 font-semibold">
            <a href="/">Services</a>
          </li>
          <li className=" hover:text-orange-600 font-semibold">
            <a href="/">Blog</a>
          </li>
        </ul>
        {/* navbar */}
        <ul
          className={` text-white duration-300 md:hidden w-full h-screen  fixed bg-black  top-[56px] ${
            toggle ? "left-[0%]" : "left-[-100%] z-50"
          }`}
        >
          <li className="p-3">
            <a href="/">Home</a>
          </li>
          <li className="p-3">
            <a href="/">AboutUs</a>
          </li>
          <li className="p-3">
            <a href="/">Product</a>
          </li>
          <li className="p-3">
            <a href="/">Contact</a>
          </li>
          <li className="p-3">
            <a href="/">Services</a>
          </li>
          <li className="p-3">
            <a href="/">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
