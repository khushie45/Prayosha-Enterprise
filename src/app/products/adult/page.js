import React from "react";
import Image from "next/image";
import ToraTora from "../../../../public/adult/ToraTora.png";
import BreakDance from "../../../../public/adult/BreakDance.png";
import FeesBee from "../../../../public/adult/FeesBee.png";
import FlumeCoaster from "../../../../public/adult/FlumeCoaster.png";
import FreeFall from "../../../../public/adult/FreeFall.png";
import MusicalBob from "../../../../public/adult/MusicalBob.png";
import Ranger from "../../../../public/adult/Ranger.png";
import SpinningCoaster from "../../../../public/adult/SpinningCoaster.png";
import SwingChair from "../../../../public/adult/SwingChair.png";
import ZayclonRollerCoaster from "../../../../public/adult/ZayclonRollerCoaster.png";

const Adult = () => {
  return (
    <div className="mx-8 my-6 text-xl">
      <h1 className="text-5xl font-bold mb-4">Adult Rides</h1>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">TORA TORA</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>40 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>20</div>

              <div className="font-bold">Area for Ride</div>
              <div>50 X 60 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>60 X 60 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>10 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>12 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 30hp</div>

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
              src={ToraTora}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">FEES BEE</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>20 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>1</div>

              <div className="font-bold">Area for Ride</div>
              <div>50 X 50 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>50 X 50 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>30 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>-</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 35hp</div>

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
              src={FeesBee}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">BREAK DANCE</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>32 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>16</div>

              <div className="font-bold">Area for Ride</div>
              <div>50 X 50 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>60 X 60 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>10 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>10 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 25hp</div>

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
              src={BreakDance}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Flume Coaster</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>12 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>2</div>

              <div className="font-bold">Area for Ride</div>
              <div>90 X 230 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>100 X 250 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>40 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>-</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 35hp</div>

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
              src={FlumeCoaster}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">SPINING COASTER</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>16 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>1</div>

              <div className="font-bold">Area for Ride</div>
              <div>40 X 100 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>-</div>

              <div className="font-bold">Ride Height</div>
              <div>20 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 3hp</div>

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
              src={SpinningCoaster}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">FREEFALL</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>16 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>1</div>

              <div className="font-bold">Area for Ride</div>
              <div>20 X 20 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>30 X 30 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>80 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>-</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 35hp</div>

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
              src={FreeFall}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">RANGER</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>32 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>2</div>

              <div className="font-bold">Area for Ride</div>
              <div>50 X 50 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>50 X 50 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>45 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 50hp</div>

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
              src={Ranger}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">MUSICAL BOB</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>40 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>20</div>

              <div className="font-bold">Area for Ride</div>
              <div>50 X 50 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>50 X 60 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>10 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>10 to 15 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 20hp</div>

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
              src={MusicalBob}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">ZAYCLON ROLLER COASTER</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>12 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>2</div>

              <div className="font-bold">Area for Ride</div>
              <div>80 X 250 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>100 X 250 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>35 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>1 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 40hp</div>

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
              src={ZayclonRollerCoaster}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">SWING CHAIR</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>24 Person Adults</div>

              <div className="font-bold">No. of Bogies</div>
              <div>12</div>

              <div className="font-bold">Area for Ride</div>
              <div>40 X 40 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>50 X 50 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>18 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>12 RPM</div>

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
              src={SwingChair}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adult;
