"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import HoverButton from "./hoverButton/hoverButton";

const Work = ({ title, role, slug, img }) => {
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
    <div className="relative flex items-center justify-between w-full px-5 py-6 border-t group border-text">
      <div className="flex items-center space-x-5">
        <span className="font-yeseva text-[3vw]">{title}</span>
        <span className="font-oswald text-[14px] font-extralight">{`${role}`}</span>
      </div>
      <img
        src={img}
        className="h-[200px] object-cover object-center rounded border w-[350px] hidden transition-opacity group-hover:flex absolute opacity-0 group-hover:opacity-100"
        style={{
          top: blobPosition.y - 480,
          left: blobPosition.x,
          transition: "opacity 0.3s",
        }}
      />
      <div>
        <Link href={slug} className="font-akira">
          <HoverButton />
        </Link>
      </div>
    </div>
  );
};

export default Work;
