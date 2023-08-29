import React from "react";
import ServiceCard from "../components/serviceCard/serviceCard";

const ServicesAbout = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen space-y-5">
      <span className="w-full text-center font-akira text-[3vw]">
        Services I Offer
      </span>
      <span className="font-yeseva text-[2vw] w-full text-center">
        Some of the services I offer
      </span>
      <div className="w-full p-5 space-y-5">
        <div className="flex w-full justify-evenly">
          <ServiceCard text={"Mobile-Friendly UI Design"} />
          <ServiceCard text={"User-Centered UX Design"} />
          <ServiceCard text={"Interactive Prototyping"} />
        </div>
        <div className="flex w-full justify-evenly">
          <ServiceCard text={"Custom Website Development"} />
          <ServiceCard text={"Frontend Performance Optimization"} />
          <ServiceCard text={"Akshit Aryan"} />
        </div>
      </div>
    </div>
  );
};

export default ServicesAbout;
