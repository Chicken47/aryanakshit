import React from "react";
import ContactContent from "./contact";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <main className="flex justify-center w-full min-h-screen bg-bg text-text">
      <div className="flex items-center flex-col w-full max-w-[1366px]">
        <Header />
        <ContactContent />
        <Footer />
      </div>
    </main>
  );
};

export default ContactPage;
