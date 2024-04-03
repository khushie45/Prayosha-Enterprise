"use client";
import React, { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-3 bg-[#231D67] text-white text-xl">
      <div>
        <Link href="/">
          <Image src="/logo.png" width={100} height={100} alt="Logo" />
        </Link>
      </div>
      <div className="flex">
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

        <div
          className="relative p-2 mr-2 hover:bg-[#D8DDE2] hover:text-[#231D67] hover:rounded font-semibold cursor-pointer"
          onMouseEnter={() => setIsOpened(true)}
          onMouseLeave={() => setIsOpened(false)}
        >
          Products
          {isOpened && (
            <div className="absolute top-11 left-0 z-10 flex flex-col items-start rounded-lg bg-[#77AFD6] text-[#231d67] shadow-lg w-[200px] text-base">
              <Link
                className="px-4 pb-2 pt-2 hover:text-[#231D67] hover:font-extrabold"
                href="../products/children"
              >
                Children Rides
              </Link>
              <Link
                className="px-4 pb-2 hover:text-[#231D67] hover:font-extrabold"
                href="../products/family"
              >
                Family Rides
              </Link>
              <Link
                className="px-4 pb-2 hover:text-[#231D67] hover:font-extrabold"
                href="../products/adult"
              >
                Adult Rides
              </Link>
            </div>
          )}
        </div>

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
