"use client";
import { Download } from "@mui/icons-material";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const AboutHero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ease = Power4.easeOut;
  let akshitImage = useRef();
  let akshitHere = useRef();
  let lowerRow = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from(
        akshitImage,
        {
          ease: ease,
          duration: 1,
          x: -900,
          skewX: 20,
        },
        "1"
      );
      tl.from(
        akshitHere,
        {
          opacity: 0,
          duration: 1.5,
        },
        "1"
      );
      tl.from(
        lowerRow,
        {
          opacity: 0,
          y: 200,
        },
        "-=0.8"
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="flex flex-col justify-center w-full min-h-screen space-y-[4%]">
      <div className="flex items-center justify-center space-x-[10%] w-full">
        <img
          src="/images/akshit_photo.jpeg"
          className="w-1/2 rounded-3xl"
          ref={(el) => {
            akshitImage = el;
          }}
        />
        <div
          ref={(el) => {
            akshitHere = el;
          }}
          className="flex flex-col items-start w-3/12 h-full justify-evenly"
        >
          <span className="font-yeseva text-[3vw]">Akshit Here.</span>
          <span className="font-oswald text-[2vw] font-light">
            Hello. Within this space, you'll be able to explore my
            <mark> approach to work </mark>, delve into my past
            <mark> experiences </mark>, and learn about several other topics
            that I hold a deep passion for.
          </span>
        </div>
      </div>
      <div
        ref={(el) => {
          lowerRow = el;
        }}
        className="flex items-center justify-between w-full px-[15vw]"
      >
        <div className="flex items-center justify-center rounded-full group w-[13vw] h-[13vw] border-2 border-text">
          <Link
            style={{ zoom: "400%" }}
            target="_blank"
            href={
              "https://drive.google.com/file/d/1dr3qgB9nwTHhap18uz6mbF9KsA-9tUrl/view?usp=sharing"
            }
            className="transition-all duration-500 group-hover:scale-125"
          >
            <Download />
          </Link>
        </div>
        <div className="flex flex-col items-end font-akira text-[5vw] hover:-translate-x-[100px] transition-all ease-in-out duration-500">
          <span>download</span>
          <span className="-mt-10">resume</span>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
