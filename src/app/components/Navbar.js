"use client";
import React, { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isProductsOpened, setIsProductsOpened] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap sticky top-0 z-50 shadow-lg p-3 bg-[#231D67] text-white text-base md:text-xl">
      <div className="flex items-center flex-shrink-0">
        <Link href="/">
          <Image src="/logo.png" width={100} height={100} alt="Logo" />
        </Link>
      </div>
      <div className="block md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="px-3">
          <HiMenu size={25} />
        </button>
      </div>
      <div
        className={`w-full block md:flex md:items-center md:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mt-2 md:flex-grow md:justify-end">
          <Link
            className="p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold block md:inline-block"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            className="p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold block md:inline-block"
            href="../about-us"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          <div
            className="relative p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold cursor-pointer block md:inline-block"
            onMouseEnter={() => setIsProductsOpened(true)}
            onMouseLeave={() => setIsProductsOpened(false)}
          >
            Products
            {isProductsOpened && (
              <div className="absolute top-1 -right-2 md:top-11 md:left-0 z-10 flex flex-col items-start rounded-lg bg-[#77AFD6] text-[#231d67] shadow-lg w-[150px] md:w-[200px] text-base">
                <Link
                  className="pl-3 md:px-4 pb-2 pt-2 hover:text-[#231D67] hover:font-extrabold"
                  href="../products/children"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Children Rides
                </Link>
                <Link
                  className="pl-3 md:px-4 pb-2 hover:text-[#231D67] hover:font-extrabold"
                  href="../products/family"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Family Rides
                </Link>
                <Link
                  className="pl-3 md:px-4 pb-2 hover:text-[#231D67] hover:font-extrabold"
                  href="../products/adult"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Adult Rides
                </Link>
              </div>
            )}
          </div>

          <Link
            className="p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold block md:inline-block"
            href="../services"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            className="p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold block md:inline-block"
            href="../contact-us"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
