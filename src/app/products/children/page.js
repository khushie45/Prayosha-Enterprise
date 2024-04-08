import React from "react";
import Image from "next/image";
import SunAndMoon from "../../../../public/children/SunAndMoon.png";
import AngryBirdBrakeDance from "../../../../public/children/AngryBirdBrakeDance.png";
import BabyTrain from "../../../../public/children/BabyTrain.png";
import MiniSwingChair from "../../../../public/children/MiniSwingChair.png";
import PlaneRide from "../../../../public/children/PlaneRide.png";
import RTower from "../../../../public/children/RTower.png";
import BikeRide from "../../../../public/children/BikerRide.png";
import Gandola from "../../../../public/children/Gandola.png";
import MiniFeesBee from "../../../../public/children/MiniFeesBee.png";
import Helicopter from "../../../../public/children/Helicopter.png";

const Children = () => {
  return (
    <div className="mx-8 my-6 text-xl">
      <h1 className="text-5xl font-bold mb-4">Children Rides</h1>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">SUN & MOON</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>12 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>6</div>

              <div className="font-bold">Area for Ride</div>
              <div>20 X 20 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>25 X 20 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>15 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

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
              src={SunAndMoon}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

{/*       <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">ANGRY BIRD BREAK DANCE</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>4 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>4</div>

              <div className="font-bold">Area for Ride</div>
              <div>10 X 10 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>10 X 10 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>4 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 1hp</div>

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
              src={AngryBirdBrakeDance}
              alt="Image"
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div> */}

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">BABY TRAIN</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>16 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>4</div>

              <div className="font-bold">Area for Ride</div>
              <div>60 X 30 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>70 X 30 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>1 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>1 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor drive 1hp</div>

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
              src={BabyTrain}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">MINI SWING CHAIR</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>12 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>12</div>

              <div className="font-bold">Area for Ride</div>
              <div>25 X 25 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>30 X 30 ft.</div>

              <div className="font-bold">Ride Height</div>
              <div>10 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>6 RPM</div>

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
              src={MiniSwingChair}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">PLANE RIDE</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>6 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>6</div>

              <div className="font-bold">Area for Ride</div>
              <div>10 X 10 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>-</div>

              <div className="font-bold">Ride Height</div>
              <div>6 ft.</div>

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
              src={PlaneRide}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">R TOWER</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>6 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>6</div>

              <div className="font-bold">Area for Ride</div>
              <div>10 X 10 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>-</div>

              <div className="font-bold">Ride Height</div>
              <div>6 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 5hp</div>

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
              src={RTower}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">BIKE RIDE</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>6 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>6</div>

              <div className="font-bold">Area for Ride</div>
              <div>15 X 15 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>-</div>

              <div className="font-bold">Ride Height</div>
              <div>6 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 5hp</div>

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
              src={BikeRide}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">GANDOLA</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>8 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>4</div>

              <div className="font-bold">Area for Ride</div>
              <div>10 X 10 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>-</div>

              <div className="font-bold">Ride Height</div>
              <div>10 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 5hp</div>

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
              src={Gandola}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">MINI FEES BEE</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>6 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>1</div>

              <div className="font-bold">Area for Ride</div>
              <div>10 X 10 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>-</div>

              <div className="font-bold">Ride Height</div>
              <div>10 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 5hp</div>

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
              src={MiniFeesBee}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">HELICOPTER</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="table-container bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="font-bold">Setting Capacity</div>
              <div>8 Person Children</div>

              <div className="font-bold">No. of Bogies</div>
              <div>4</div>

              <div className="font-bold">Area for Ride</div>
              <div>10 X 10 ft.</div>

              <div className="font-bold">Fencing Area</div>
              <div>-</div>

              <div className="font-bold">Ride Height</div>
              <div>10 ft.</div>

              <div className="font-bold">Vertical Rotating Speed</div>
              <div>5 RPM</div>

              <div className="font-bold">Power Required</div>
              <div>Motor 5hp</div>

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
              src={Helicopter}
              alt="Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Children;
