import Link from "next/link";
import React from "react";

const ContactContent = () => {
  return (
    <div className="flex flex-col justify-center w-full p-5 pt-[6vw] min-h-[90vh] space-y-10 text-text">
      {/* <div className="flex w-full h-full">
        <div className="flex flex-col justify-center w-1/2">
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
        <img
          src="https://media.giphy.com/media/xobxBtqQ4wZyg/giphy.gif"
          className="rounded-full"
        />
      </div> */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <span className="font-akira text-[9vw]">Let's</span>
          <span className="font-akira text-[9vw] -mt-[6vw]">connect</span>
        </div>
        <div className="flex flex-col items-end space-y-5">
          <Link
            href={"mailto:akshit.aryan1999@gmail.com"}
            className="px-10 py-3 transition-all duration-500 border rounded-full cursor-pointer font-oswald border-text hover:bg-text hover:border hover:border-text hover:text-bg"
          >
            akshit.aryan1999@gmail.com
          </Link>
          <span className="px-10 py-3 transition-all border rounded-full cursor-pointer font-oswald border-text hover:bg-text hover:border hover:border-text hover:text-bg">
            +91 7700072670
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
