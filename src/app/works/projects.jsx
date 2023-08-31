import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-20 my-[8vw]">
      <div className="font-akira text-[6vw] px-10">Projects</div>
      <div className="flex flex-row-reverse w-full justify-evenly">
        <div className="flex flex-col justify-between w-1/4 h-full">
          <span className="font-yeseva text-[3vw]">Payment Dashboard</span>
          <span className="font-oswald font-extrabold tracking-[5px]">
            August 2023
          </span>
          <span className="font-light font-oswald">
            - A better UI including dark mode themes that I've been trying out
            lately, giving components of the page a glassmorphism effect. <br />
            - The table is responsive with all fields sortable. <br />- Dynamic
            Routing was implemented for the transaction row details. <br />-
            Recoil State Management system implemented for a more robust and
            scalable SMS.
          </span>
          <button className="flex items-center justify-center w-1/2 px-6 py-2 rounded-full bg-text text-bg">
            Explore
          </button>
        </div>
        <img
          src="/images/payment.png"
          className="w-1/2 border border-text rounded-3xl"
        />
      </div>
      <div className="flex w-full justify-evenly">
        <div className="flex flex-col justify-between w-1/4 h-full">
          <span className="font-yeseva text-[3vw]">Personal Website v2</span>
          <span className="font-oswald font-extrabold tracking-[5px] text-[22px]">
            August 2023
          </span>
          <span className="font-light font-oswald text-[19px]">
            - Designed and developed a new personal portfolio website. <br />-
            Used the latest NextJS 13 and employed its dynamic app routing and
            server - side components. <br />- Used GSAP for beautiful animations
            and ThreeJS for 3D incorporation.
          </span>
          <button className="flex items-center justify-center w-1/2 px-6 py-2 rounded-full bg-text text-bg">
            Explore
          </button>
        </div>
        <img
          src="/images/portfoliov2.png"
          className="w-1/2 border border-text rounded-3xl"
        />
      </div>
      <div className="flex flex-row-reverse w-full justify-evenly">
        <div className="flex flex-col justify-between w-1/4 h-full">
          <span className="font-yeseva text-[3vw]">Personal Website v2</span>
          <span className="font-oswald font-extrabold tracking-[5px] text-[22px]">
            August 2023
          </span>
          <span className="font-light font-oswald text-[19px]">
            - Designed and developed a new personal portfolio website. <br />-
            Used the latest NextJS 13 and employed its dynamic app routing and
            server - side components. <br />- Employed the use of REST APIs to
            get NASA Photo of the Day, A Quote Generator and Idea Generator for
            bored people.
          </span>
          <button className="flex items-center justify-center w-1/2 px-6 py-2 rounded-full bg-text text-bg">
            Explore
          </button>
        </div>
        <img
          src="/images/portfoliov1.png"
          className="w-1/2 border border-text rounded-3xl"
        />
      </div>
      <div className="flex w-full justify-evenly">
        <div className="flex flex-col justify-between w-1/4 h-full">
          <span className="font-yeseva text-[3vw]">
            Open for Policy & Impact
          </span>
          <span className="font-oswald font-extrabold tracking-[5px] text-[22px]">
            May 2023 - June 2023
          </span>
          <span className="font-light font-oswald text-[19px]">
            - Undertook an independent initiative to design and develop a
            website for OPI, a distinguished consulting firm. <br />- This
            endeavour allowed me to explore both design and development aspects,
            contributing to a holistic digital solution.
          </span>
          <button className="flex items-center justify-center w-1/2 px-6 py-2 rounded-full bg-text text-bg">
            Explore
          </button>
        </div>
        <img
          src="/images/opiSc.png"
          className="w-1/2 border border-text rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Projects;
