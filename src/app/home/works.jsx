"use client";

import React, { useEffect, useRef } from "react";
import { ArrowCircleDown, Star } from "@mui/icons-material";
import Work from "../components/work";
import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

const Works = () => {
  const ease = Power4.easeInOut;

  gsap.registerPlugin(ScrollTrigger);
  // let bottomToTop = useRef();

  const homeWorks = [
    // {
    //   title: "Payment Dashboard",
    //   role: "(ux/ui design, development)",
    //   slug: "/works/pay",
    // },
    {
      title: "Personal Website v2",
      role: "(ux/ui design, development)",
      slug: "/works/v2",
    },
    {
      title: "Personal Website v1",
      role: "(ux/ui design, development)",
      slug: "/works/v1",
    },
    {
      title: "Open for Policy & Impact",
      role: "(ux/ui design, development)",
      slug: "/works/opi",
    },
  ];

  // const projectRefs = homeWorks.map(() => useRef(null));

  useEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from(bottomToTop, {
      //   y: 100,
      //   ease: ease,
      //   scrollTrigger: {
      //     trigger: bottomToTop,
      //     start: "top bottom-=100",
      //     end: "top 80%",
      //     scrub: 1,
      //   },
      // });
      // projectRefs.forEach((ref, index) => {
      //   gsap.from(ref.current, {
      //     opacity: 0,
      //     y: -100,
      //     ease: ease,
      //     scrollTrigger: {
      //       trigger: ref.current,
      //       start: "top bottom",
      //       end: "top center",
      //       scrub: true,
      //     },
      //   });
      // });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col justify-center w-full min-h-screen p-5">
      <div className="font-akira text-[3.5vw] flex space-x-5 overflow-hidden">
        <span className="scale-150 animate-spin">
          <Star />
        </span>
        <span
        // ref={(el) => (bottomToTop = el)}
        >
          some of my works
        </span>
      </div>
      <div className="flex flex-col w-full my-10 border-b border-text">
        {homeWorks?.map((item, index) => {
          return (
            <div
              key={index}
              // ref={projectRefs[index]}
            >
              <Work title={item.title} role={item.role} slug={item.slug} />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center w-full -mt-5 space-x-4 cursor-pointer group">
        <Link
          href="/works"
          className="font-oswald text-[1.3vw] font-extrabold group-hover:underline"
        >
          Check out all projects
        </Link>
        <span className="transition-all -rotate-90 group-hover:scale-150">
          <ArrowCircleDown />
        </span>
      </div>
    </div>
  );
};

export default Works;
