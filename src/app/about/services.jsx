"use client";

import React, { useEffect, useRef } from "react";
import ServiceCard from "../components/serviceCard/serviceCard";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";

const ServicesAbout = () => {
  const ease = Power4.easeOut;
  gsap.registerPlugin(ScrollTrigger);
  let serviceOneRef = useRef();
  let serviceTwoRef = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(serviceOneRef, {
        y: 200,
        ease: ease,
        opacity: 0,
        skewY: 12,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: serviceOneRef,
          start: "top bottom",
          end: "top 25%",
          scrub: 0.5,
        },
      });
      gsap.from(serviceTwoRef, {
        y: 200,
        ease: ease,
        opacity: 0,
        skewY: 12,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: serviceTwoRef,
          start: "top bottom",
          end: "top center",
          scrub: 0.5,
        },
      });
    });
    return () => ctx.revert();
  });
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
      <div className="w-full p-5 space-y-16">
        <div
          ref={(el) => (serviceOneRef = el)}
          className="flex w-full justify-evenly"
        >
          <ServiceCard text={"Mobile-Friendly UI Design"} />
          <ServiceCard text={"User-Centered UX Design"} />
          <ServiceCard text={"Interactive Prototyping"} />
        </div>
        <div
          ref={(el) => (serviceTwoRef = el)}
          className="flex w-full justify-evenly"
        >
          <ServiceCard text={"Custom Website Development"} />
          <ServiceCard text={"Frontend Performance Optimization"} />
          <ServiceCard text={"Akshit Aryan"} />
        </div>
      </div>
    </div>
  );
};

export default ServicesAbout;
