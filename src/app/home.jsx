"use client";

import {
  AlternateEmail,
  DocumentScanner,
  Email,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen px-5 -mt-[3rem]">
      <div className="flex flex-col w-full">
        <span className="w-full text-left font-akira text-[13.5vw]">
          akshit
        </span>
        <span className="w-full text-right font-akira text-[13.5vw] -mt-[8vw]">
          aryan
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center justify-center w-1/5">
          <div className="w-full flex pl-5 pr-10 py-5 text-left justify-between rounded-r-full font-oswald text-[1.8rem] bg-text text-bg">
            <span>
              Located in <br /> Mumbai, IN
            </span>
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-bg">
              .
            </div>
          </div>
          <div className="flex items-center justify-around w-full py-5">
            <a
              href="mailto:akshit.aryan1999@gmail.com"
              className="transition-all duration-500 scale-150 cursor-pointer hover:rotate-12"
            >
              <AlternateEmail />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/akshitaryan"
              className="transition-all duration-500 scale-150 cursor-pointer hover:rotate-12"
            >
              <LinkedIn />
            </a>
            <a
              target="_blank"
              href="https://github.com/Chicken47/"
              className="transition-all duration-500 scale-150 cursor-pointer hover:rotate-12"
            >
              <GitHub />
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1u1315G7bV9C872O4mElZbZCLtILaMUCu/view?usp=drive_link"
              className="transition-all duration-500 scale-150 cursor-pointer hover:rotate-12"
            >
              <DocumentScanner />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end w-6/12">
          <span className="font-oswald text-[2vw] w-full text-right tracking-wide">
            Creative <mark> UI/UX Designer </mark> and
            <mark> Front-End Web Developer </mark>, dedicated to crafting
            digital experiences that blend form and function seamlessly.
          </span>
          <button className="flex items-center mt-5 cursor-pointer float-right justify-center w-1/4 text-[21px] py-2 rounded-full font-oswald bg-text text-bg">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
