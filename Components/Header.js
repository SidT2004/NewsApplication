"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  
  return (
    <>
      <div className=" nav  h-12 mt-4 bg-white text-2xl px-3 flex items-center  justify-between ">
        <div className=" flex  w-full justify-between  text-3xl tracking-tighter">
          <Link href="/"  className="font-serif ml-7 ">News.</Link>
          <ul className="flex hoverelem  gap-4">
            <Link href="/Trending">Trending</Link>
            <a href="/Politics">Politics</a>
            <a href="/Geological">Geological</a>
            <a href="/Crime">Crime</a>
            <a href="/India">Nation</a>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
