import React from "react";
import ServiceCard from "../components/serviceCard/serviceCard";

const ServicesAbout = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-5">
      <span className="w-full text-center font-akira text-[3vw]">
        Services I Offer
      </span>
      <span className="font-yeseva text-[1.5vw] w-1/2 text-center">
        Here are a selection of the services I'm adept at providing. I possess
        hands-on experience in these areas, and I'm committed to enhancing and
        refining these skillsets continually.
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
