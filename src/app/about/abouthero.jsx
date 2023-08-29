import { Download } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const AboutHero = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen space-y-[4%]">
      <div className="flex items-center justify-center space-x-[10%] w-full">
        <img src="/images/akshit_photo.jpeg" className="w-1/2 rounded-3xl" />
        <div className="flex flex-col items-start w-3/12 h-full justify-evenly">
          <span className="font-yeseva text-[3vw]">Akshit Here.</span>
          <span className="font-oswald text-[2vw] font-light">
            Hello. Within this space, you'll be able to explore my
            <mark> approach to work </mark>, delve into my past
            <mark> experiences </mark>, and learn about several other topics
            that I hold a deep passion for.
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-[7vw]">
        <div className="flex items-center justify-center rounded-full group w-[13vw] h-[13vw] border-2 border-text">
          <Link
            style={{ zoom: "400%" }}
            target="_blank"
            href={
              "https://drive.google.com/file/d/1u1315G7bV9C872O4mElZbZCLtILaMUCu/view?usp=drive_link"
            }
            className="transition-all duration-500 group-hover:scale-125"
          >
            <Download />
          </Link>
        </div>
        <div className="flex flex-col items-end font-akira text-[5vw] hover:-translate-x-[100px] transition-all ease-in-out duration-500">
          <span>download</span>
          <span className="-mt-10">resume</span>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
