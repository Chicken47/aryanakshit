import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-[5vw] py-[10vw]">
      <div className="font-akira text-[5vw] px-[10vw]">
        Open for policy & Impact
      </div>
      <img
        src="/images/opiSc.png"
        className="w-4/5 border rounded-2xl border-text"
      />
      <div className="font-yeseva text-[2vw] w-full px-[10vw]">
        May 2023 - June 2023
      </div>
      <div className="px-[10vw] font-oswald text-[22px] font-light tracking-wide">
        Undertook an independent initiative to design and develop a website for
        OPI, a distinguished consulting firm. This endeavor allowed me to
        explore both design and development aspects, contributing to a holistic
        digital solution. <br />
        <br />
        🔹 Personally conceptualized and shaped the UI and UX, prioritizing an
        intuitive and visually appealing user experience. <br />
        🔹 Incorporated ReactJS and GSAP to introduce subtle animations,
        enhancing user interaction and engagement. <br />
        🔹 Employed TailwindCSS for functional design and styling, creating a
        modern and user-friendly interface. <br />
        🔹 Ensured full responsiveness across a range of screens, aiming to
        provide consistent user experiences. <br />
        🔹 The resultant website reflects the firm's values and services,
        underscoring the synergy of innovation and professionalism. <br />
        🔹 For a firsthand experience, the project can be explored at
        opi-new-dev.vercel.app. <br />
        <br />
        This personal project underscores my dedication to delivering meaningful
        outcomes, highlighting my growing proficiency in UI/UX design and
        front-end development, with an emphasis on crafting inclusive digital
        experiences.
      </div>
      <div className="w-full px-[10vw] space-x-5">
        <span className="px-5 py-3 transition-all duration-500 border rounded-full cursor-pointer hover:bg-text hover:text-bg bg-bg text-text border-text">
          Source Code
        </span>
        <span className="px-5 py-3 transition-all duration-500 border rounded-full cursor-pointer hover:bg-text hover:text-bg bg-bg text-text border-text">
          Live Site
        </span>
      </div>
    </div>
  );
};

export default Project;
