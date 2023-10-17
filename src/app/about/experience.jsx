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
      <div className="flex flex-row-reverse w-full mt-10">
        <div className="flex flex-col items-center w-1/2 p-10 border-l border-text">
          <div
            // ref={(el) => (pro1 = el)}
            className="w-4/5 bg-[#00000093] border rounded-lg flex flex-col space-y-3 items-end p-6"
          >
            <span className="font-yeseva text-[2vw]">Full-Stack Developer</span>
            <span className="font-oswald text-[1.2vw] tracking-widest font-extrabold text-blue-500">
              Oneture Technologies
            </span>
            <span className="font-oswald text-[1vw]">
              August 2023 - Present
            </span>
            <span className="font-light text-right font-oswald">
              - <mark>Picked up backend work</mark> and currently making full
              stack production level backing applications for a top3 bank in
              India.
              <br /> - Began in the company with <mark>leading a project</mark>;
              project architecture and planning included. <br /> - Multiple
              <mark>microservices shipped</mark> and currently in use,
              automating wherever needed and making application easier to use
              while having to working with Governemtn given APIs.
            </span>
          </div>
        </div>
        <div id="org-logo" className="flex items-center h-full p-10">
          <img
            src="data:image/jpeg;base64,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"
            className="w-1/2 scale-150 rounded-full org-logo"
          />
        </div>
      </div>
      <div className="flex w-full mt-10">
        <div className="flex flex-col items-center w-1/2 p-10 border-r border-text">
          <div
            ref={(el) => (pro1 = el)}
            className="w-4/5 bg-[#00000093] border rounded-lg flex flex-col space-y-3 items-end p-6"
          >
            <span className="font-yeseva text-[2vw]">Designer, Developer</span>
            <span className="font-oswald text-[1.2vw] tracking-widest font-extrabold text-blue-500">
              OPEN FOR POLICY & IMPACT
            </span>
            <span className="font-oswald text-[1vw]">May 2023 - June 2023</span>
            <span className="font-light text-right font-oswald">
              - Pioneered the development of a dynamic website for a nascent
              consulting enterprise. <br /> - <mark> Conceptualized </mark> and
              executed the website's design, along with generating a substantial
              portion of its content. <br /> -{" "}
              <mark> Sole-handedly led and completed </mark> this project,
              showcasing my ability to manage and deliver independently.
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
            className="w-4/5 bg-[#00000093] border rounded-lg flex flex-col space-y-3 items-start p-6"
          >
            <span className="font-yeseva text-[2vw]">FrontEnd Developer</span>
            <span className="font-oswald text-[1.2vw] tracking-widest font-extrabold text-blue-500">
              moneyHop, a cross-border payment solution
            </span>
            <span className="font-oswald text-[1vw]">Feb 2022 - July 2023</span>
            <span className="font-light text-left font-oswald">
              - I crafted three advanced payment portals, employing the latest
              tech. This drove a noteworthy weekly business{" "}
              <mark> increase of $5 million. </mark> <br />- Upheld project
              aesthetics, stayed current with trends using
              <mark> Tailwind CSS </mark>, and ensured code integrity with
              <mark> TypeScript </mark>. Seamlessly managed state via{" "}
              <mark> Recoil </mark> in React. <br />- Enhanced UX with{" "}
              <mark> Framer Motion animations </mark>, prioritized security via
              <mark> SJCL encryption </mark>, and met banking regs. <br />-
              <mark>
                {" "}
                Launched operational end-to-end online money remittance platform{" "}
              </mark>{" "}
              for major Indian bank.
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
            className="w-4/5 bg-[#00000093] border rounded-lg flex flex-col space-y-3 items-end p-6"
          >
            <span className="font-yeseva text-[2vw]">Co-Founder, CTO</span>
            <span className="font-oswald text-[1.2vw] tracking-widest font-extrabold text-blue-500">
              PROJECT STATECRAFT, a student-driven policy think tank
            </span>
            <span className="font-oswald text-[1vw]">
              May 2020 - November 2021
            </span>
            <span className="font-light text-right font-oswald">
              - <mark> Spearheaded the technology </mark> sector, overseeing
              strategic initiatives. <br />- Orchestrated the{" "}
              <mark> development and upkeep of the PSC website </mark>, serving
              as a hub for research papers, newsletters, and podcasts. <br />-
              Leveraged the <mark> Adobe Creative Suite </mark> to craft
              compelling visuals, including logo design, Instagram Reels video
              editing, engaging social media posts, captivating video trailers,
              eye-catching posters, and engaging podcasts. <br />- Innovatively
              integrated design and technology to enhance the organization's
              <mark> online presence and engagement </mark>. <br />
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
