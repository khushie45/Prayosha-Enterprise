import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bottom-0 text-center bg-[#77AFD6] text-[#231d67]">
      <section className="container md:px-6 lg:px-0 py-6 flex items-center md:items-start justify-center flex-wrap">
        <div className="w-full md:w-5/12 lg:w-3/12 flex flex-col items-center md:items-start justify-start">
          <p className="text-uppercase font-bold mb-2">
            Shree Prayosha Enterprise
          </p>
          <p>Connect with us today!</p>
        </div>

        <div className="w-full mt-5 md:mt-0 md:w-5/12 lg:w-2/12 flex flex-col items-center md:items-start">
          <p className="text-uppercase font-bold mb-2">Products</p>
          <Link className="hover:underline" href="../products/children">
            Children Rides
          </Link>
          <Link className="hover:underline" href="../products/family">
            Family Rides
          </Link>
          <Link className="hover:underline" href="../products/adult">
            Adult Rides
          </Link>
        </div>

        <div className="w-full mt-5 md:mt-0 md:w-5/12 md:mt-4 lg:w-2/12 lg:mt-0 flex flex-col items-center md:items-start">
          <p className="text-uppercase font-bold mb-2">Links</p>
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="../about-us">
            About Us
          </Link>
          <Link className="hover:underline" href="../services">
            Services
          </Link>
        </div>

        <div className="w-full mt-5 md:mt-0 md:w-5/12 md:mt-4 lg:w-3/12 lg:mt-0 flex flex-col items-center md:items-start">
          <p className="text-uppercase font-bold mb-2">Contact</p>
          <p className="flex justify-center items-center">
            <AiFillHome size={20} className="mr-3" /> Anand, Gujarat - 388001
          </p>
          <p className="flex justify-center items-center">
            <MdEmail size={20} className="mr-3" />
            shreeprayosha@gmail.com
          </p>
          <p className="flex justify-center items-center">
            <FaPhoneAlt size={20} className="mr-3" />
            +91 9824444189
          </p>
          <p className="flex justify-center items-center">
            <FaPhoneAlt size={20} className="mr-3" />
            +91 9054470072
          </p>
          <p className="flex justify-center items-center">
            <RiFacebookFill size={20} className="mr-3" />
            <Link
              className="hover:underline"
              href="https://www.facebook.com/cabarruscounty/videos/why-i-work-here-wednesday/750242532579154/"
              target="_blank"
            >
              shreeprayoshaenterprise
            </Link>
          </p>
        </div>
      </section>
      <hr />
      <div className="text-center p-4">
        © 2024 Copyright:
        <Link
          className="hover:underline"
          href="https://shree-prayosha-enterprise.netlify.app/"
          target="_blank"
        >
          <strong>Shree Prayosha Enterprise</strong>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
