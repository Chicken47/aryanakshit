import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen">
      <span className="w-full text-center font-akira text-[4vw]">
        professional experience
      </span>
      <div className="flex w-full mt-10">
        <div className="flex flex-col items-center w-1/2 p-10 border-r border-text">
          <div className="w-4/5 bg-[#7e7e7e93] rounded-lg flex flex-col space-y-3 items-end p-6">
            <span className="font-yeseva text-[2vw]">Designer, Developer</span>
            <span className="font-oswald text-[1.2vw] tracking-widest font-extrabold text-gray-800">
              OPEN FOR POLICY & IMPACT
            </span>
            <span className="font-oswald text-[1vw]">May 2023 - June 2023</span>
            <span className="text-right font-oswald font-extralight">
              - Undertook an independent initiative to design and develop a
              website for OPI, a distinguished consulting firm. <br />- This
              endeavor allowed me to explore both design and development
              aspects, contributing to a holistic digital solution.
            </span>
          </div>
        </div>
        <div className="flex items-center h-full p-10">
          <img src="/images/Union.png" className="w-1/2" />
        </div>
      </div>
      <div className="flex flex-row-reverse w-full">
        <div className="flex flex-col items-center w-1/2 p-10 border-l border-text">
          <div className="w-4/5 bg-[#7e7e7e93] rounded-lg flex flex-col space-y-3 items-start p-6">
            <span className="font-yeseva text-[2vw]">FrontEnd Developer</span>
            <span className="font-oswald text-[1.2vw] tracking-widest font-extrabold text-gray-800">
              moneyHop, a cross-border payment solution
            </span>
            <span className="font-oswald text-[1vw]">Feb 2022 - July 2023</span>
            <span className="text-left font-oswald font-extralight">
              - I crafted three advanced payment portals, employing the latest
              tech. This drove a noteworthy weekly business increase of $5
              million. <br />
              - Upheld project aesthetics, stayed current with trends using
              Tailwind CSS, and ensured code integrity with TypeScript.
              Seamlessly managed state via Recoil in React. <br />
              - Enhanced UX with Framer Motion animations, prioritized security
              via SJCL encryption, and met banking regs. <br />- Launched
              operational end-to-end online remittance platform for major Indian
              bank.
            </span>
          </div>
        </div>
        <div className="flex items-center h-full p-10 scale-150">
          <img src="/images/moneyhop.png" className="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
