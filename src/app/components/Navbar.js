"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-3 bg-[#231D67] text-white text-xl">
      <div>
        <Link href="/">
          <Image src="/logo.png" width={100} height={100} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link
          className="p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold"
          href="/"
        >
          Home
        </Link>
        <Link
          className="p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold"
          href="../about-us"
        >
          About
        </Link>
        <Link
          className="p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold"
          href="../products"
        >
          Products
        </Link>
        <Link
          className="p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold"
          href="../services"
        >
          Services
        </Link>
        <Link
          className="p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold"
          href="../contact-us"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
