import React from "react";

const MacCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col w-1/5 rounded bg-text">
      <div className="flex items-center justify-start px-5 py-3 space-x-2">
        <div className="w-[15px] h-[15px] bg-red-500 rounded-full" />
        <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full" />
        <div className="w-[15px] h-[15px] bg-green-500 rounded-full" />
      </div>
      <div className="flex items-end justify-evenly font-bold w-full font-yeseva text-[2vw] text-bg">
        <span className="font-akira text-[2vw]">{number}</span>
        <span className="w-3/5">{title}</span>
      </div>
      <span className="w-full px-5 py-6 font-light font-oswald text-bg">
        {description}
      </span>
    </div>
  );
};

export default MacCard;
