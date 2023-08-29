import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed z-50 flex justify-between w-full px-10 py-3 border-b font-yeseva bg-[#1a1a1a9f] border-text">
      <Link href="/" className="text-[24px]">
        Akshit Aryan
      </Link>
      <div className="flex items-center text-[20px] space-x-2">
        <Link className="cursor-pointer hover:underline" href="/about">
          about,
        </Link>
        <Link className="cursor-pointer hover:underline" href="/works">
          works,
        </Link>
        <span className="cursor-pointer hover:underline">contact</span>
      </div>
    </div>
  );
};

export default Header;
