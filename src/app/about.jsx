import React from "react";

const AboutHome = () => {
  return (
    <div className="w-full h-screen bg-bg px-[7.5vw] flex">
      <div
        id="left"
        className="flex flex-col justify-center w-1/2 h-full px-10"
      >
        <span className="font-akira text-[4vw]">hello i'm</span>
        <div className="flex items-center space-x-3 -mt-[2vw]">
          <span className="font-akira text-[6vw]">aryan,</span>
          <span className="font-yeseva text-[2vw]">Akshit Aryan</span>
        </div>
        <span className="font-oswald text-[1.2rem] tracking-wide">
          I am a UX/UI designer based in India. I’m a relatively budding new
          person in this field with 2 years of experience. As a designer I love
          making <mark>minimal and brutalist</mark> designs.
          <br />
          <br />
          As a developer, I use <mark>seamless animations</mark> to enhance
          designs, generating a much better user experience, increasing user
          retention.
          <br />
          <br />
          Lately, I’m including <mark>3d Elements</mark> into web designs and
          browsers.
          <br />
          Other than that I love music, cycling, badminton and photography
        </span>
      </div>
      <div id="right" className="w-1/2 pr-3 text-left font-oswald">
        .
      </div>
    </div>
  );
};

export default AboutHome;
