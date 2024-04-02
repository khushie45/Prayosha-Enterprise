import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-[#231D67] text-white text-xl">
      <div>
        <Image src="/logo.png" width={100} height={100} alt="Logo" />
      </div>
      <div>
        <Link className="p-2" href="/">
          Home
        </Link>
        <Link className="p-2" href="../about-us">
          About
        </Link>
        <Link className="p-2" href="../products">
          Products
        </Link>
        <Link className="p-2" href="../services">
          Services
        </Link>
        <Link className="p-2" href="../contact-us">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
