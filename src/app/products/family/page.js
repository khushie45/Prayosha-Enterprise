import React from "react";
import Image from "next/image";
import Columbus from "../../../../public/family/Columbus.png";
import DragonCoaster from "../../../../public/family/DragonCoaster.png";
import FamilyTrain from "../../../../public/family/FamilyTrain.png";
import JumpingFrog from "../../../../public/family/JumpingFrog.png";
import MerryGoRound from "../../../../public/family/MerryGoRound.png";
import MonoRail from "../../../../public/family/MonoRail.png";
import RevolvingTower from "../../../../public/family/RevolvingTower.png";
import StCar from "../../../../public/family/StCar.png";
import SuperJet from "../../../../public/family/SuperJet.png";

const Family = () => {
  return (
    <div className="mx-2 my-2 text-base md:mx-8 md:my-4 md:text-xl">
      <h1 className="text-2xl md:text-5xl font-bold mb-1 md:mb-4">
        Family Rides
      </h1>

      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold mb-2">SUPER JET</h1>
        <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-2 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>24 Person All Age</div>

              <div className="font-bold">No. of Bogies</div>
              <div>12</div>

              <div className="font-bold">Area for Ride</div>
              <div>40 X 40 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>50 X 40 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>15 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>10 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 40hp</div>

              <div className="font-bold">Drive</div>
              <div>Hydrolic Drive</div>

              <div className="font-bold">Loading</div>
              <div>Simultaneous</div>

              <div className="font-bold">Construction</div>
              <div>Permanent Park</div>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={SuperJet}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold mb-2">MERRY GO ROUND</h1>
        <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-2 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>20 Person All Age</div>

              <div className="font-bold">No. of Bogies</div>
              <div>20</div>

              <div className="font-bold">Area for Ride</div>
              <div>40 X 40 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>50 X 40 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>15 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>10 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 15hp</div>

              <div className="font-bold">Drive</div>
              <div>Electrical Drive</div>

              <div className="font-bold">Loading</div>
              <div>Simultaneous</div>

              <div className="font-bold">Construction</div>
              <div>Permanent Park</div>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={MerryGoRound}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold mb-2">ST. CAR</h1>
        <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-2 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>20 Person All Age</div>

              <div className="font-bold">No. of Bogies</div>
              <div>10</div>

              <div className="font-bold">Area for Ride</div>
              <div>40 X 40 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>50 X 50 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>12 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>0 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 5hp</div>

              <div className="font-bold">Drive</div>
              <div>Electrical Drive</div>

              <div className="font-bold">Loading</div>
              <div>Simultaneous</div>

              <div className="font-bold">Construction</div>
              <div>Permanent Park</div>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={StCar}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold mb-2">COLUMBUS</h1>
        <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-2 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>20 Person All Age</div>

              <div className="font-bold">No. of Bogies</div>
              <div>1</div>

              <div className="font-bold">Area for Ride</div>
              <div>20 X 40 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>30 X 40 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>20 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 10hp</div>

              <div className="font-bold">Drive</div>
              <div>Electrical Drive</div>

              <div className="font-bold">Loading</div>
              <div>Simultaneous</div>

              <div className="font-bold">Construction</div>
              <div>Permanent Park</div>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={Columbus}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold mb-2">REVOLVING TOWER</h1>
        <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-2 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>16 Person All Age</div>

              <div className="font-bold">No. of Bogies</div>
              <div>1</div>

              <div className="font-bold">Area for Ride</div>
              <div>40 X 50 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>50 X 50 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>50 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>8 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 30hp</div>

              <div className="font-bold">Drive</div>
              <div>Hydrolic Drive</div>

              <div className="font-bold">Loading</div>
              <div>Simultaneous</div>

              <div className="font-bold">Construction</div>
              <div>Permanent Park</div>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={RevolvingTower}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold mb-2">JUMPING FROG</h1>
        <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-2 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>20 Person All Age</div>

              <div className="font-bold">No. of Bogies</div>
              <div>5</div>

              <div className="font-bold">Area for Ride</div>
              <div>35 ft. Diameter</div>

              <div className="font-bold">Fencing Area</div>
              <div>40 ft. Diameter</div>

              <div className="font-bold">Ride Height</div>
              <div>4 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 5hp</div>

              <div className="font-bold">Drive</div>
              <div>Electrical Drive</div>

              <div className="font-bold">Loading</div>
              <div>Simultaneous</div>

              <div className="font-bold">Construction</div>
              <div>Permanent Park</div>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={JumpingFrog}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold mb-2">FAMILY TRAIN</h1>
        <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-2 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>20 Person All Age</div>

              <div className="font-bold">No. of Bogies</div>
              <div>5</div>

              <div className="font-bold">Area for Ride</div>
              <div>90 X 40 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>100 X 40 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>5 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>1 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 5hp</div>

              <div className="font-bold">Drive</div>
              <div>Electrical Drive</div>

              <div className="font-bold">Loading</div>
              <div>Simultaneous</div>

              <div className="font-bold">Construction</div>
              <div>Permanent Park</div>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={FamilyTrain}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold mb-2">MONO RAIL</h1>
        <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-2 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>16 Person All Age</div>

              <div className="font-bold">No. of Bogies</div>
              <div>4</div>

              <div className="font-bold">Area for Ride</div>
              <div>300 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>-</div>

              <div className="font-bold">Ride Height</div>
              <div>3 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>1 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 7.5hp</div>

              <div className="font-bold">Drive</div>
              <div>Electrical Drive</div>

              <div className="font-bold">Loading</div>
              <div>Simultaneous</div>

              <div className="font-bold">Construction</div>
              <div>Permanent Park</div>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={MonoRail}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold mb-2">DRAGON COASTER</h1>
        <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-2 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>16 Person All Age</div>

              <div className="font-bold">No. of Bogies</div>
              <div>4</div>

              <div className="font-bold">Area for Ride</div>
              <div>50 X 90 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>-</div>

              <div className="font-bold">Ride Height</div>
              <div>12 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>1 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 7.5hp dc</div>

              <div className="font-bold">Drive</div>
              <div>Electrical Drive</div>

              <div className="font-bold">Loading</div>
              <div>Simultaneous</div>

              <div className="font-bold">Construction</div>
              <div>Permanent Park</div>
            </div>
          </div>

          <div className="image-container">
            <Image
              src={DragonCoaster}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
