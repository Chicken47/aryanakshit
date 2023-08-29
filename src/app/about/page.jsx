import React from "react";
import Header from "../components/header";
import AboutHero from "./abouthero";
import HowIWork from "./howiwork";
import Experience from "./experience";
import ServicesAbout from "./services";
import Footer from "../components/footer";

const AboutPage = () => {
  return (
    <main className="flex justify-center w-full min-h-screen bg-bg text-text">
      <div className="flex items-center flex-col w-full max-w-[1366px]">
        <Header />
        <AboutHero />
        <HowIWork />
        <Experience />
        <ServicesAbout />
        <Footer />
      </div>
    </main>
  );
};

export default AboutPage;
