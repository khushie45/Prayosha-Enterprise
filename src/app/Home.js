"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import DiscoCoaster from "../../public/DiscoCoaster.jpg";
import WaterRide from "../../public/WaterRide.jpg";
import Train from "../../public/Train.jpg";
import Octopus from "../../public/Octopus.jpg";
import DragonCoaster from "../../public/DragonCoaster.jpg";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        stopOnHover={false}
        useKeyboardArrows={true}
        showIndicators={true}
        width={900}
        className="h-[500px]"
      >
        <div>
          <Image src={WaterRide} alt="Ride" className="h-[500px]" />
        </div>
        <div>
          <Image src={Train} alt="Ride" className="h-[500px]" />
        </div>
        <div>
          <Image src={DragonCoaster} alt="Ride" className="h-[500px]" />
        </div>
        <div>
          <Image src={Octopus} alt="Ride" className="h-[500px]" />
        </div>
        <div>
          <Image src={DiscoCoaster} alt="Ride" className="h-[500px]" />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
