import { CopyrightOutlined } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-4 border-t font-yeseva text-[1.6vw]">
      <div className="flex items-center space-x-2">
        <CopyrightOutlined />
        <span>Akshit Aryan</span>
      </div>
      <div>v2, 2023</div>
    </div>
  );
};

export default Footer;
