"use client";

import React, { useEffect, useRef } from "react";
import { ArrowCircleDown, Star } from "@mui/icons-material";
import Work from "../components/work";
import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Works = () => {
  const ease = Power4.easeInOut;

  gsap.registerPlugin(ScrollTrigger);
  let bottomToTop = useRef();

  let workOne = useRef();
  let workTwo = useRef();
  let workThree = useRef();
  let workFour = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(bottomToTop, {
        y: 200,
        ease: ease,
        scrollTrigger: {
          trigger: bottomToTop,
          start: "top bottom",
          end: "top 95%",
          scrub: 1,
        },
      });
      gsap.from([workOne, workTwo, workThree, workFour], {
        y: 200,
        ease: ease,
        opacity: 0,
        skewY: 12,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: bottomToTop,
          start: "top bottom",
          end: "top 25%",
          scrub: 0.5,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col justify-center w-full min-h-screen p-5 bg-bg">
      <div className="font-akira text-[3.5vw] flex space-x-5 overflow-hidden">
        <span className="scale-150 animate-spin">
          <Star />
        </span>
        <span ref={(el) => (bottomToTop = el)}>some of my works</span>
      </div>
      <div className="flex flex-col w-full my-10 border-b border-text">
        <div
          ref={(el) => {
            workOne = el;
          }}
        >
          <Work
            title={"Personal Website v2"}
            role={"(ui/ux design, development)"}
          />
        </div>
        <div
          ref={(el) => {
            workTwo = el;
          }}
        >
          <Work
            title={"Personal Website v1"}
            role={"(ui/ux design, development)"}
          />
        </div>
        <div
          ref={(el) => {
            workThree = el;
          }}
        >
          <Work
            title={"Open for Policy & Impact"}
            role={"(ui/ux design, development)"}
          />
        </div>
        <div
          ref={(el) => {
            workFour = el;
          }}
        >
          <Work title={"HopRemit"} role={"(development)"} />
        </div>
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
