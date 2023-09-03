"use client";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ContactPage = () => {
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });
  const params = useParams();
  console.log(params, "haha");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setBlobPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projectList = [
    {
      title: "Personal Website v2",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Used GSAP for beautiful animations and ThreeJS for 3D incorporation.",
      img: "/images/portfoliov2.png",
      slug: "/works/v2",
      projectId: "v2",
      gitLink: "aryanakshit",
      reverse: true,
      liveLink: "https://www.aryanakshit.vercel.app",
    },
    {
      title: "Personal Website v1",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Employed the use of REST APIs to get NASA Photo of the Day, A Quote Generator and Idea Generator for bored people.",
      img: "/images/portfoliov1.png",
      slug: "/works/v1",
      projectId: "v1",
      gitLink: "akshitaryan",
      reverse: false,
      liveLink: "https://www.akshitaryan.vercel.app",
    },
    {
      title: "Open for Policy & Impact",
      date: "February 2022 - July 2023",
      desc: "Undertook an independent initiative to design and develop a website for OPI, a distinguished consulting firm.  This endeavour allowed me to explore both design and development aspects, contributing to a holistic digital solution.",
      img: "/images/opiSc.png",
      slug: "/works/opi",
      projectId: "opi",
      gitLink: "opi-new-dev",
      reverse: true,
      liveLink: "https://www.opi-new-dev.vercel.app",
    },
  ];

  const selectedProject = projectList.find(
    (project) => project.projectId === params.projectId
  );

  return (
    <div className="flex justify-center w-full min-h-screen bg-slate-950">
      <div
        id="fixed-background"
        className="fixed w-full h-full pointer-events-none blur-[50px]"
      >
        <div
          id="blob"
          className="h-[30vw] w-[27vw] bg-gradient-to-r from-teal-600 to-yellow-800 rounded-full animate-slow-spin"
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
        <div className="min-h-[93vh] flex flex-col items-center my-[10vh] px-[5vw] space-y-10">
          <div className="text-[4vw] w-full text-center font-akira">
            {selectedProject.title}
          </div>
          <img
            src={selectedProject.img}
            className="object-cover border min-w-1/2 rounded-xl"
          />
          <div className="w-2/3 font-oswald text-[20px] p-5 rounded-lg bg-[#00000084]">
            {selectedProject.desc}
          </div>
          <div className="flex justify-between w-1/3 px-[2vw]">
            <Link
              className="px-5 py-2 border rounded-full border-text bg-[#0000006e]"
              target="_blank"
              href={`https://www.github.com/Chicken47/${selectedProject.gitLink}`}
            >
              {"< Source Code />"}
            </Link>
            <Link
              target="_blank"
              className="px-5 py-2 border rounded-full border-text bg-[#0000006e]"
              href={selectedProject.liveLink}
            >
              {"Live Site ->"}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
