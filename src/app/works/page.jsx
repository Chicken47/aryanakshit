"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Projects from "./projects";
import Footer from "../components/footer";

const WorksPage = () => {
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
          className="h-[30vw] w-[27vw] bg-gradient-to-br from-green-500 to-red-600 rounded-full animate-slow-spin"
          style={{
            position: "absolute",
            top: blobPosition.y - 200,
            left: blobPosition.x - 200,
          }}
        ></div>
      </div>
      <div
        id="content"
        className="relative z-50 flex flex-col items-center w-full h-full max-w-[1366px] text-text"
      >
        <Header />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default WorksPage;
