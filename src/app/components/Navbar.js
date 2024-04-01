import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-8 bg-orange-500 text-white text-xl">
      <div>Logo</div>
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
