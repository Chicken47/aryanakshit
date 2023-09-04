import React from "react";

const ServiceCard = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-[28%] h-[100px] bg-gradient-to-r from-[#0080ff77] rounded-xl to-[#8000ff71] card__content">
      <span className="font-oswald text-text text-[24px] text-center font-extrabold">
        {text}
      </span>
    </div>
  );
};

export default ServiceCard;
