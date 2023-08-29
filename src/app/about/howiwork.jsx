import React from "react";
import MacCard from "../components/macCard";

const HowIWork = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen px-10 space-y-10">
      <span className="text-[5vw] font-akira">how i work</span>
      <span className="w-full font-oswald text-[24px] tracking-[5px]">
        I have made a lot of projects (personal and paid for) and through the
        brutal process of trial and error, I have figured out a process of
        working that is the most efficient for all stakeholders in the project.
      </span>
      <div className="flex items-start justify-around w-full">
        <MacCard
          number={1}
          title="Cognizing"
          description="Understanding the project requirements is undoubtedly the most crucial aspect of this process.
          The more time you invest in this phase, the more time you will save later on—almost exponentially."
        />
        <MacCard
          number={2}
          title="Layout & Wireframe"
          description="Crafting the layout and wireframe is where the blueprint of the project takes shape. 
          Ensuring that the user's journey is intuitive and seamless is paramount as I create the framework upon which the design and functionality will thrive."
        />
        <MacCard
          number={3}
          title="Design & Prototyping"
          description="This is where life is breathed unto the project. Every pixel and colour has to resonate with the target demographic. 
          Then prototyping gives a very good idea of the user experience and how to enhance it."
        />
        <MacCard
          number={4}
          title="Develop"
          description="As I move into the development stage, I transform designs into responsive, functional web solutions. 
          Collaborating with the backend team, I ensure that the technical backbone aligns with the envisioned frontend experience, resulting in a harmonious end product."
        />
      </div>
    </div>
  );
};

export default HowIWork;
