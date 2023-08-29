import { ArrowCircleDown, Star } from "@mui/icons-material";
import React from "react";
import Work from "../components/work";

const Works = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen p-5 bg-bg">
      <div className="font-akira text-[3.5vw] flex space-x-5">
        <span className="scale-150 animate-spin">
          <Star />
        </span>
        <span>some of my works</span>
      </div>
      <div className="flex flex-col w-full my-10 border-b border-text">
        <Work />
        <Work />
        <Work />
        <Work />
      </div>
      <div className="flex items-center justify-center w-full -mt-5 space-x-4">
        <span className="font-oswald text-[1.3vw] font-extrabold ">
          Check out all projects
        </span>
        <span className="scale-150 -rotate-90">
          <ArrowCircleDown />
        </span>
      </div>
    </div>
  );
};

export default Works;
