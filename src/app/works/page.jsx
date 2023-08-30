import React from "react";
import Header from "../components/header";
import Projects from "./projects";
import Footer from "../components/footer";

const WorksPage = () => {
  return (
    <main className="flex justify-center w-full min-h-screen bg-bg text-text">
      <div className="flex items-center flex-col w-full max-w-[1366px]">
        <Header />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default WorksPage;
