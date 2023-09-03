"use client";

import React, { useEffect, useRef } from "react";
import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import BustModel from "./BustModel";

const AboutHome = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ease = Power4.easeInOut;
  let leftToRight = useRef();
  let bottomToTop = useRef();
  let aryanRef = useRef();
  let paraRef = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(leftToRight, {
        y: 100,
        ease: ease,
        opacity: 0,
        scrollTrigger: {
          trigger: leftToRight,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      });
      gsap.from(bottomToTop, {
        // x: 300,
        ease: ease,
        opacity: 0,
        scrollTrigger: {
          trigger: bottomToTop,
          start: "top bottom",
          end: "top 15%",
          scrub: 2,
        },
      });
      gsap.from(".text-description", {
        // x: 300,
        // ease: ease,
        opacity: 0,
        scrollTrigger: {
          trigger: ".text-description",
          start: "top bottom",
          end: "top 75%",
          scrub: true,
        },
      });
      gsap.from(aryanRef, {
        x: 500,
        ease: ease,
        scrollTrigger: {
          trigger: aryanRef,
          start: "top bottom",
          end: "top 70%",
          scrub: 1,
        },
      });
      gsap.from(paraRef, {
        x: -400,
        ease: ease,
        opacity: 0,
        scrollTrigger: {
          trigger: paraRef,
          start: "top bottom",
          end: "top 70%",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full items-center h-screen px-[7.5vw] flex">
      <div
        id="left"
        className="flex flex-col justify-center w-1/2 h-full px-10 overflow-hidden"
      >
        <span
          className="font-akira text-[4vw]"
          ref={(el) => (leftToRight = el)}
        >
          hello i'm
        </span>
        <div className="flex items-center space-x-3 -mt-[2vw]">
          <span className="font-akira text-[6vw]" ref={(el) => (aryanRef = el)}>
            aryan,
          </span>
          <span
            ref={(el) => (bottomToTop = el)}
            className="font-yeseva text-[2vw] text-from-bottom"
          >
            Akshit Aryan
          </span>
        </div>
        <span
          ref={(el) => (paraRef = el)}
          className="font-oswald font-light text-[1.2rem] tracking-wide"
        >
          I'm a UX/UI designer from India with 2 years of experience. I
          specialize in minimal and brutalist designs, incorporating seamless
          animations to improve user experience and retention. <br />
          I've also been experimenting with 3D elements in web design. Outside
          of work, I enjoy music, cycling, badminton, and photography.
        </span>
        <div className="p-5 mt-5 bg-[#3cafaf24] rounded-lg font-oswald text-description">
          - I used this cool 3D model of an abstract sculpture and animated it
          in my website. <br />
          - You can drag it around with your mouse to explore it from different
          angles. <br />- I am still learning about 3D and web development, but
          I am excited to see what I can create in the future.
        </div>
      </div>
      <div id="right" className="w-1/2 h-full overflow-hidden">
        <div className="h-[12vw]"></div>
        <BustModel />
      </div>
    </div>
  );
};

export default AboutHome;
