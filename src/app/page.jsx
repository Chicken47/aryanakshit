"use client";
import AboutHome from "./home/about";
import Contact from "./home/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./home/home";
import Works from "./home/works";
import { useState, useEffect } from "react";
import HowIWork from "./about/howiwork";
import ServicesAbout from "./about/services";

export default function Home() {
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
          id="blob"
          className="h-[30vw] w-[27vw] bg-gradient-to-br from-green-500 to-blue-600 rounded-full animate-slow-spin"
          style={{
            position: "absolute",
            top: blobPosition.y - 200,
            left: blobPosition.x - 200,
          }}
        ></div>
      </div>
      <div
        id="content"
        className="relative z-50 flex flex-col overflow-hidden items-center w-full h-full max-w-[1366px] text-text"
      >
        <Header />
        <HomePage />
        <AboutHome />
        <HowIWork />
        <ServicesAbout />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
