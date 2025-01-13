import { CopyrightOutlined } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200/20 backdrop-blur-sm bg-white/5">
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex items-center space-x-2 transition-colors duration-300 group hover:text-indigo-400">
            <CopyrightOutlined className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
            <span className="text-sm font-yeseva sm:text-base">
              Akshit Aryan
            </span>
          </div>
          <div className="mt-2 sm:mt-0">
            <span className="text-sm text-gray-500 transition-colors duration-300 font-yeseva sm:text-base hover:text-gray-300">
              v2, 2023
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
