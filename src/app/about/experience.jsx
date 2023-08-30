"use client";

import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);
  let pro1 = useRef();
  let pro2 = useRef();
  let pro3 = useRef();

  useEffect(() => {
    const orgLogos = gsap.utils.toArray("#org-logo");
    let ctx = gsap.context(() => {
      gsap.from(pro1, {
        x: -500,
        opacity: 0,
        ease: Power4.easeOut,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: pro1,
          start: "top bottom",
          end: "top 25%",
          scrub: 0.5,
        },
      });
      gsap.from(pro2, {
        x: 500,
        opacity: 0,
        ease: Power4.easeOut,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: pro2,
          start: "top bottom",
          end: "top 25%",
          scrub: 0.5,
        },
      });
      gsap.from(pro3, {
        x: -500,
        opacity: 0,
        ease: Power4.easeOut,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: pro3,
          start: "top bottom",
          end: "top 25%",
          scrub: 0.5,
        },
      });
      orgLogos.forEach((logo) => {
        gsap.from(logo, {
          scale: 0.2,
          opacity: 0,
          scrollTrigger: {
            trigger: logo,
            start: "top bottom",
            scrub: true,
            end: "bottom center",
            // markers: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="flex flex-col justify-center w-full min-h-screen">
      <span className="w-full text-center font-akira text-[4vw]">
        professional experience
      </span>
      <div className="flex w-full mt-10">
        <div className="flex flex-col items-center w-1/2 p-10 border-r border-text">
          <div
            ref={(el) => (pro1 = el)}
            className="w-4/5 bg-[#7e7e7e93] rounded-lg flex flex-col space-y-3 items-end p-6"
          >
            <span className="font-yeseva text-[2vw]">Designer, Developer</span>
            <span className="font-oswald text-[1.2vw] tracking-widest font-extrabold text-gray-800">
              OPEN FOR POLICY & IMPACT
            </span>
            <span className="font-oswald text-[1vw]">May 2023 - June 2023</span>
            <span className="text-right font-oswald font-extralight">
              - Pioneered the development of a dynamic website for a nascent
              consulting enterprise. <br /> - Conceptualized and executed the
              website's design, along with generating a substantial portion of
              its content. <br /> - Sole-handedly led and completed this
              project, showcasing my ability to manage and deliver
              independently.
            </span>
          </div>
        </div>
        <div id="org-logo" className="flex items-center h-full p-10">
          <img src="/images/Union.png" className="w-1/2 org-logo" />
        </div>
      </div>
      <div className="flex flex-row-reverse w-full">
        <div className="flex flex-col items-center w-1/2 p-10 border-l border-text">
          <div
            ref={(el) => (pro2 = el)}
            className="w-4/5 bg-[#7e7e7e93] rounded-lg flex flex-col space-y-3 items-start p-6"
          >
            <span className="font-yeseva text-[2vw]">FrontEnd Developer</span>
            <span className="font-oswald text-[1.2vw] tracking-widest font-extrabold text-gray-800">
              moneyHop, a cross-border payment solution
            </span>
            <span className="font-oswald text-[1vw]">Feb 2022 - July 2023</span>
            <span className="text-left font-oswald font-extralight">
              - I crafted three advanced payment portals, employing the latest
              tech. This drove a noteworthy weekly business increase of $5
              million. <br />
              - Upheld project aesthetics, stayed current with trends using
              Tailwind CSS, and ensured code integrity with TypeScript.
              Seamlessly managed state via Recoil in React. <br />
              - Enhanced UX with Framer Motion animations, prioritized security
              via SJCL encryption, and met banking regs. <br />- Launched
              operational end-to-end online remittance platform for major Indian
              bank.
            </span>
          </div>
        </div>
        <div id="org-logo" className="flex items-center h-full p-10 scale-150">
          <img src="/images/moneyhop.png" className="w-1/2 org-logo" />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col items-center w-1/2 border-r border-text">
          <div
            ref={(el) => (pro3 = el)}
            className="w-4/5 bg-[#7e7e7e66] rounded-lg flex flex-col space-y-3 items-end p-6"
          >
            <span className="font-yeseva text-[2vw]">Co-Founder, CTO</span>
            <span className="font-oswald text-[1.2vw] tracking-widest font-extrabold text-gray-800">
              PROJECT STATECRAFT, a student-driven policy think tank
            </span>
            <span className="font-oswald text-[1vw]">
              May 2020 - November 2021
            </span>
            <span className="text-right font-oswald font-extralight">
              - Spearheaded the technology sector, overseeing strategic
              initiatives. <br />- Orchestrated the development and upkeep of
              the PSC website, serving as a hub for research papers,
              newsletters, and podcasts. <br />- Leveraged the Adobe Creative
              Suite to craft compelling visuals, including logo design,
              Instagram Reels video editing, engaging social media posts,
              captivating video trailers, eye-catching posters, and engaging
              podcasts. <br />- Innovatively integrated design and technology to
              enhance the organization's online presence and engagement. <br />
            </span>
          </div>
        </div>
        <div
          id="org-logo"
          className="flex items-center justify-center h-full p-10 scale-150"
        >
          <img src="/images/psc.jpeg" className="w-1/2 org-logo" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
