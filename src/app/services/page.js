import React from "react";

const Services = () => {
  return (
    <div className="mx-4 my-2 text-lg md:mx-8 md:my-4 md:text-xl">
      <h1 className="text-2xl md:text-5xl font-bold mb-1 md:mb-4">Our Services</h1>
      <ol className="list-decimal ml-6 md:ml-8 md:text-xl">
        <li className="mb-2"><strong>Manufacturing: </strong>Specializing in designing and fabricating amusement rides with customization options.</li>
        <li className="mb-2"><strong>Installation: </strong>Professional assembly and placement services for optimal ride performance and safety.</li>
        <li className="mb-2"><strong>Customization: </strong>Tailoring rides to specific themes, sizes, and requirements with advanced design techniques.</li>
        <li className="mb-2"><strong>Maintenance and Support: </strong>Comprehensive programs for ride upkeep, including inspections, repairs, and training.</li>
        <li className="mb-2"><strong>Repairing: </strong>Expertise in repairing various amusement rides, including older models, prioritizing safety and compliance.</li>
        <li className="mb-2"><strong>Consultation: </strong>Offering strategic insights and recommendations for amusement park projects, from site selection to regulatory guidance.</li>
      </ol>
    </div>
  );
};

export default Services;
