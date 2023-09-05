"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projectList = [
    {
      title: "Personal Website v2",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Used GSAP for beautiful animations and ThreeJS for 3D incorporation.",
      img: "/images/portfoliov2.png",
      slug: "/works/v2",
      gitLink: "aryanakshit",
      reverse: true,
      liveLink: "https://www.aryanakshit.vercel.app",
    },
    {
      title: "Personal Website v1",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Employed the use of REST APIs to get NASA Photo of the Day, A Quote Generator and Idea Generator for bored people.",
      img: "/images/portfoliov1.png",
      slug: "/works/v1",
      gitLink: "akshitaryan",
      reverse: false,
      liveLink: "https://www.akshitaryan.vercel.app",
    },
    {
      title: "Open for Policy & Impact",
      date: "May 2023 - July 2023",
      desc: "Undertook an independent initiative to design and develop a website for OPI, a distinguished consulting firm.  This endeavour allowed me to explore both design and development aspects, contributing to a holistic digital solution.",
      img: "/images/opiSc.png",
      slug: "/works/opi",
      gitLink: "opi-new-dev",
      reverse: true,
      liveLink: "https://www.opi-new-dev.vercel.app",
    },
    {
      title: "HopRemit",
      date: "February 2022 - July 2023",
      desc: "Created a full-stack internation payment portal neo-bank solution from scratch as a founding member. Shaped the product continuously by collaborating with the product, design teams and the CEO. The product is live that averages over 5 million USD a week.",
      img: "/images/hopremit.png",
      role: "(development)",
      slug: "/works/hopremit",
      reverse: false,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-20 my-[8vw]">
      <div className="font-akira text-[6vw] px-10">Projects</div>
      {projectList.map((item, index) => {
        return (
          <div
            key={index}
            className={
              item.reverse
                ? "flex flex-row-reverse w-full justify-evenly"
                : "flex w-full justify-evenly"
            }
          >
            <div className="flex flex-col justify-center w-1/4 h-full space-y-5">
              <span className="font-yeseva text-[2vw]">{item.title}</span>
              <span className="font-oswald font-extrabold tracking-[5px]">
                {item.date}
              </span>
              <span className="font-light font-oswald">{item.desc}</span>
              <Link
                href={item.slug}
                className="flex items-center justify-center w-1/2 px-6 py-2 transition-all rounded-full bg-text text-bg hover:bg-transparent hover:font-extrabold hover:text-text hover:border hover:border-text "
              >
                Explore
              </Link>
            </div>
            <img
              src={item.img}
              className="object-cover w-1/2 border border-text rounded-3xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
