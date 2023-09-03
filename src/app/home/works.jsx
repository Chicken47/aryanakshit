import React from "react";
import { ArrowCircleDown, Star } from "@mui/icons-material";
import Work from "../components/work";
import Link from "next/link";

const Works = () => {
  const homeWorks = [
    {
      title: "Personal Website v2",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Used GSAP for beautiful animations and ThreeJS for 3D incorporation.",
      img: "/images/portfoliov2.png",
      slug: "/works/v2",
      role: "(ux/ui design, development)",
      reverse: true,
    },
    {
      title: "Personal Website v1",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Employed the use of REST APIs to get NASA Photo of the Day, A Quote Generator and Idea Generator for bored people.",
      img: "/images/portfoliov1.png",
      slug: "/works/v1",
      role: "(ux/ui design, development)",
      reverse: false,
    },
    {
      title: "Open for Policy & Impact",
      date: "February 2022 - July 2023",
      desc: "Undertook an independent initiative to design and develop a website for OPI, a distinguished consulting firm.  This endeavour allowed me to explore both design and development aspects, contributing to a holistic digital solution.",
      img: "/images/opiSc.png",
      role: "(ux/ui design, development)",
      slug: "/works/opi",
      reverse: true,
    },
  ];

  return (
    <div className="flex flex-col justify-center w-full min-h-screen p-5">
      <div className="font-akira text-[3.5vw] flex space-x-5 overflow-hidden">
        <span className="scale-150 animate-spin">
          <Star />
        </span>
        <span>some of my works</span>
      </div>
      <div className="flex flex-col w-full my-10 border-b border-text">
        {homeWorks?.map((item, index) => {
          return (
            <div key={index}>
              <Work
                title={item.title}
                role={item.role}
                slug={item.slug}
                img={item.img}
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center w-full -mt-5 space-x-4 cursor-pointer group">
        <Link
          href="/works"
          className="font-oswald text-[1.3vw] font-extrabold group-hover:underline"
        >
          Check out all my projects
        </Link>
        <span className="transition-all -rotate-90 group-hover:scale-150">
          <ArrowCircleDown />
        </span>
      </div>
    </div>
  );
};

export default Works;
