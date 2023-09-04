"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Gallery = () => {
  const textRef = useRef(null);
  const imageRowOne = useRef(null);
  const imageRowTwo = useRef(null);
  const imageRowThree = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.1,
        },
      });

      tl.to(textRef.current, {
        x: "-85%",
      });
      gsap.to(imageRowOne.current, {
        x: "-100%",
        scrollTrigger: {
          trigger: imageRowOne.current,
          start: "bottom 90%",
          end: "bottom 15%",
          scrub: 2,
        },
      });
      gsap.to(imageRowTwo.current, {
        x: "-100%",
        scrollTrigger: {
          trigger: imageRowTwo.current,
          start: "bottom 90%",
          end: "bottom 15%",
          scrub: 2,
        },
      });
      gsap.to(imageRowThree.current, {
        x: "-100%",
        scrollTrigger: {
          trigger: imageRowThree.current,
          start: "bottom 90%",
          end: "bottom 15%",
          scrub: 2,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen p-5 space-y-10 overflow-hidden">
      <span ref={textRef} className="font-yeseva text-[3vw]">
        Some photos by yours truly
      </span>
      <span ref={textRef} className="font-akira text-[3vw]">
        ladakh_ladakh_ladakh_ladakh_ladakh_ladakh_ladakh_ladakh_ladakh_
      </span>
      <div
        ref={imageRowOne}
        className="w-auto flex items-center h-[40vh] space-x-10"
      >
        <img
          src="/gallery/lad1.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad2.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad3.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad4.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad1.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad3.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
      </div>
      <div
        ref={imageRowTwo}
        className="w-auto flex items-center h-[45vh] space-x-10"
      >
        <img
          src="/gallery/lad6.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad5.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad7.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad8.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad2.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
      </div>
      <div
        ref={imageRowThree}
        className="w-auto flex items-center h-[45vh] space-x-10"
      >
        <img
          src="/gallery/lad9.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad10.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad11.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
        <img
          src="/gallery/lad12.jpeg"
          className="object-cover object-center h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Gallery;
