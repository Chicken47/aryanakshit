import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";
import Project from "./project";

const WorkProject = () => {
  return (
    <main className="flex justify-center w-full min-h-screen bg-bg text-text">
      <div className="flex items-center flex-col w-full max-w-[1366px]">
        <Header />
        <Project />
        <Footer />
      </div>
    </main>
  );
};

export default WorkProject;
