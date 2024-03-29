"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutHero from "./abouthero";
import Experience from "./experience";
import Gallery from "../home/gallery";
import Contact from "../home/contact";

const AboutPage = () => {
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setBlobPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex justify-center w-full min-h-screen bg-slate-950">
      <div
        id="fixed-background"
        className="fixed w-full h-full pointer-events-none blur-[50px]"
      >
        <div
          className="h-[30vw] w-[27vw] bg-gradient-to-br from-red-500 to-blue-600 rounded-full animate-slow-spin absolute"
          style={{
            top: blobPosition.y - 200,
            left: blobPosition.x - 200,
          }}
        ></div>
      </div>
      <div className="relative z-50 flex flex-col items-center w-full h-full max-w-[1366px] text-text">
        <Header />
        <AboutHero />
        <Experience />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
