import React from "react";
import "./serviceCard.css";

const ServiceCard = ({ text }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-center w-full h-full card__content">
        <span className="font-oswald text-text text-[24px] text-center font-extrabold">
          {text}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
