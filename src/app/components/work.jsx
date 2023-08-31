import Link from "next/link";
import React from "react";

const Work = ({ title, role, slug }) => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-6 border-t border-text">
      <div className="flex items-center space-x-5">
        <span className="font-yeseva text-[3vw]">{title}</span>
        <span className="font-oswald text-[14px] font-extralight">{`${role}`}</span>
      </div>
      <div>
        <Link href={slug} className="font-akira">
          see project
        </Link>
      </div>
    </div>
  );
};

export default Work;
