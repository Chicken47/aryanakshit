import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-between w-full p-5 space-y-10 bg-bg">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start w-full">
          <span className="font-yeseva text-[3vw] w-full space-x-16">
            <span>Name:</span>
            <input
              className="text-[22px] bg-transparent border-b"
              placeholder="John Doe"
            />
          </span>
        </div>
        <div className="flex flex-col items-start w-full">
          <span className="font-yeseva text-[3vw] w-full space-x-16">
            <span>e-Mail:</span>
            <input
              className="text-[22px] bg-transparent border-b"
              placeholder="john@doe.com"
            />
          </span>
        </div>
        <div className="flex flex-col items-start w-full">
          <span className="font-yeseva text-[3vw] w-full space-x-16">
            <span>Services:</span>
            <input
              className="text-[22px] bg-transparent border-b"
              placeholder="web design, webdev"
            />
          </span>
        </div>
        <div className="flex flex-col items-start w-full">
          <span className="font-yeseva text-[3vw] w-full space-x-16">
            <span>Message:</span>
            <input
              className="text-[22px] bg-transparent border-b"
              placeholder="Can you help me with..."
            />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="font-akira text-[9vw]">Let's</span>
          <span className="font-akira text-[9vw] -mt-[6vw]">connect</span>
        </div>
        <div className="flex flex-col items-end space-y-5">
          <span className="px-10 py-3 border rounded-full font-oswald border-text">
            akshit.aryan1999@gmail.com
          </span>
          <span className="px-10 py-3 border rounded-full font-oswald border-text">
            +91 7700072670
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
