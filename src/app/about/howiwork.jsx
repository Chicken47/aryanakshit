"use client";

import React, { useEffect, useRef } from "react";
import MacCard from "../components/macCard";
import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const HowIWork = () => {
  const ease = Power4.easeOut;
  gsap.registerPlugin(ScrollTrigger);
  let workTitle = useRef();
  let workCards = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(workTitle, {
        x: 200,
        opacity: 0,
        ease: ease,
        scrollTrigger: {
          trigger: workTitle,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      });
      gsap.from(workCards, {
        y: 200,
        ease: ease,
        opacity: 0,
        skewY: 20,
        scrollTrigger: {
          trigger: workCards,
          start: "top bottom",
          end: "center 40%",
          scrub: 0.5,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="flex flex-col justify-center w-full h-screen px-10 space-y-10">
      <span ref={(el) => (workTitle = el)} className="text-[5vw] font-akira">
        how i work
      </span>
      <span className="w-full font-oswald text-[24px]">
        Having undertaken numerous projects, both personal and commissioned,
        I've navigated the rigorous terrain of trial and error. This journey has
        led me to uncover an <mark> optimized workflow </mark> that{" "}
        <mark> maximizes efficiency </mark> for all project stakeholders.
      </span>
      <div
        ref={(el) => (workCards = el)}
        className="flex items-start justify-around w-full"
      >
        <MacCard
          number={1}
          title="Cognizing"
          description="Understanding the project requirements is undoubtedly the most crucial aspect of this process.
          The more time you invest in this phase, the more time you will save later on—almost exponentially."
        />
        <MacCard
          number={2}
          title="Layout & Wireframe"
          description="Crafting the layout and wireframe is where the blueprint of the project takes shape. 
          Ensuring that the user's journey is intuitive and seamless is paramount as I create the framework upon which the design and functionality will thrive."
        />
        <MacCard
          number={3}
          title="Design & Prototyping"
          description="This is where life is breathed unto the project. Every pixel and colour has to resonate with the target demographic. 
          Then prototyping gives a very good idea of the user experience and how to enhance it."
        />
        <MacCard
          number={4}
          title="Develop"
          description="As I move into the development stage, I transform designs into responsive, functional web solutions. 
          Collaborating with the backend team, I ensure that the technical backbone aligns with the envisioned frontend experience, resulting in a harmonious end product."
        />
      </div>
    </div>
  );
};

export default HowIWork;
