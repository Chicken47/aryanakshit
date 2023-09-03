"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projectList = [
    // {
    //   title: "Payment Dashboard",
    //   date: "August 2023",
    //   desc: "A better UI including dark mode themes that I've been trying out lately, giving components of the page a glassmorphism effect. The table is responsive with all fields sortable. Dynamic Routing was implemented for the transaction row details. Recoil State Management system implemented for a more robust and scalable SMS. Used REST APIs to get all of the data. Here is the source code. Deployed it here using Vercel.",
    //   img: "/images/payment.png",
    //   slug: "/works/pay",
    //   reverse: false,
    // },
    {
      title: "Personal Website v2",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Used GSAP for beautiful animations and ThreeJS for 3D incorporation.",
      img: "/images/portfoliov2.png",
      slug: "/works/v2",
      reverse: true,
    },
    {
      title: "Personal Website v1",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Employed the use of REST APIs to get NASA Photo of the Day, A Quote Generator and Idea Generator for bored people.",
      img: "/images/portfoliov1.png",
      slug: "/works/v1",
      reverse: false,
    },
    {
      title: "Open for Policy & Impact",
      date: "February 2022 - July 2023",
      desc: "Undertook an independent initiative to design and develop a website for OPI, a distinguished consulting firm.  This endeavour allowed me to explore both design and development aspects, contributing to a holistic digital solution.",
      img: "/images/opiSc.png",
      slug: "/works/opi",
      reverse: true,
    },
  ];

  // const projectRefs = projectList.map(() => useRef(null));
  // const imageRefs = projectList.map(() => useRef(null));

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     projectRefs.forEach((ref, index) => {
  //       gsap.from(ref.current, {
  //         opacity: 0,
  //         x: "100vw",
  //         scrollTrigger: {
  //           trigger: ref.current,
  //           start: "top bottom",
  //           end: "top center",
  //           scrub: true,
  //         },
  //       });
  //     });
  //     imageRefs.forEach((ref, index) => {
  //       gsap.from(ref.current, {
  //         opacity: 0.5,
  //         duration: 2,
  //         scale: 0.5,
  //         scrollTrigger: {
  //           trigger: ref.current,
  //           start: "top bottom",
  //           end: "top center",
  //           scrub: true,
  //         },
  //       });
  //     });
  //   });
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-20 my-[8vw]">
      <div className="font-akira text-[6vw] px-10">Projects</div>
      {projectList.map((item, index) => {
        return (
          <div
            key={index}
            // ref={projectRefs[index]}
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
              // ref={imageRefs[index]}
              className="object-cover w-1/2 border border-text rounded-3xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
