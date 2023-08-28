import React from "react";

const Header = () => {
  return (
    <div className="z-50 flex justify-between w-full px-2 py-3 border-b font-yeseva border-text">
      <span className="text-[24px]">Akshit Aryan</span>
      <div className="flex items-center text-[20px] space-x-2">
        <span className="cursor-pointer hover:underline">about,</span>
        <span className="cursor-pointer hover:underline">works,</span>
        <span className="cursor-pointer hover:underline">contact</span>
      </div>
    </div>
  );
};

export default Header;
