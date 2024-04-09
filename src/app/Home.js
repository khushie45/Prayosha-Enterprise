"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import aboutUsBg from "../../public/aboutUsBg.jpg";
import SuperJet from "../../public/family/SuperJet.png";
import MerryGoRound from "../../public/family/MerryGoRound.png";
import DragonCoaster from "../../public/family/DragonCoaster.png";
import ToraTora from "../../public/adult/ToraTora.png";
import BreakDance from "../../public/adult/BreakDance.png";
import FlumeCoaster from "../../public/adult/FlumeCoaster.png";
import MusicalBob from "../../public/adult/MusicalBob.png";

const Home = () => {
  return (
    <div>
      <div className="md:mb-5">
        <Image src={aboutUsBg} className="w-full" alt="bgImage" />
      </div>
      <div className="flex justify-center items-center m-2">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          stopOnHover={false}
          useKeyboardArrows={true}
          showIndicators={true}
          className="w-full md:w-5/6 h-[300px] md:h-[500px]"
        >
          <div>
            <Image
              src={SuperJet}
              alt="Ride"
              className="h-[300px] md:h-[500px]"
            />
          </div>
          <div>
            <Image
              src={MerryGoRound}
              alt="Ride"
              className="h-[300px] md:h-[500px]"
            />
          </div>
          <div>
            <Image
              src={DragonCoaster}
              alt="Ride"
              className="h-[300px] md:h-[500px]"
            />
          </div>
          <div>
            <Image
              src={ToraTora}
              alt="Ride"
              className="h-[300px] md:h-[500px]"
            />
          </div>
          <div>
            <Image
              src={BreakDance}
              alt="Ride"
              className="h-[300px] md:h-[500px]"
            />
          </div>
          <div>
            <Image
              src={FlumeCoaster}
              alt="Ride"
              className="h-[300px] md:h-[500px]"
            />
          </div>
          <div>
            <Image
              src={MusicalBob}
              alt="Ride"
              className="h-[300px] md:h-[500px]"
            />
          </div>
        </Carousel>
      </div>
      <div className="mx-2 my-2 text-base md:mx-8 md:my-4 md:text-xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">Why Us?</h1>
        <p className="md:mx-2">
          At Shree Prayosha Enterprise, we pride ourselves on offering a
          comprehensive range of advantages:
        </p>
        <ul className="list-disc mx-4 my-2 md:mx-8 md:my-4">
          <li className="mb-2">
            <strong>Advanced Infrastructure: </strong>Equipped with cutting-edge
            technology and modern machinery, our advanced infrastructure ensures
            the seamless production of top-quality products.
          </li>
          <li className="mb-2">
            <strong>Skilled Workforce: </strong>Our team comprises experienced
            and skilled professionals dedicated to delivering excellence in
            every aspect of our operations, ensuring unmatched product quality
            and service.
          </li>
          <li className="mb-2">
            <strong>Ethical Business Standards: </strong>Upholding the highest
            standards of integrity and transparency, we conduct our business
            with honesty and integrity, fostering trust and credibility among
            our clients.
          </li>
          <li className="mb-2">
            <strong>Competitive Pricing: </strong>We offer competitive pricing
            without compromising on quality, providing exceptional value for
            money to our esteemed clients.
          </li>
          <li className="mb-2">
            <strong>Global Reach: </strong>With a wide distribution network, we
            have the capability to deliver our products promptly and efficiently
            to clients across various geographical locations.
          </li>
        </ul>
      </div>
      <div className="mx-2 my-2 text-base md:mx-8 md:my-4 md:text-xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-1 md:mb-4">
          Our Mission
        </h1>
        <p className="md:mx-2">
          At Shree Prayosha Enterprise, our mission is to deliver unparalleled
          products and services that exceed expectations, setting new standards
          of excellence in the amusement park industry. Central to our mission
          is a relentless commitment to customer satisfaction. We believe in not
          just meeting but surpassing our clients expectations by understanding
          their unique needs and delivering tailored solutions with unmatched
          quality and reliability. Our dedication to customer satisfaction
          permeates every aspect of our operations, driving us to continuously
          innovate, improve, and exceed the highest standards of excellence in
          all that we do.
        </p>
      </div>
    </div>
  );
};

export default Home;
