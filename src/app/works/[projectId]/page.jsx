"use client";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ContactPage = () => {
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });
  const params = useParams();
  console.log(params, "haha");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setBlobPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projectList = [
    {
      title: "Personal Website v2",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Used GSAP for beautiful animations and ThreeJS for 3D incorporation.",
      longDesc:
        "I recently undertook the exciting project of creating and deploying a cutting-edge portfolio website that seamlessly blends modern aesthetics with exceptional user experience. My design approach was meticulously crafted, with a strong focus on user interaction and ease of navigation, strategically implementing compelling call-to-actions (CTAs) to engage visitors effectively. Leveraging the power of Next.js 13 and its latest app routing capabilities, I ensured a lightning-fast, responsive, and SEO-friendly website. Dynamic routing using the new app router brought enhanced flexibility to content management. To add an extra layer of uniqueness and sophistication, I incorporated a captivating 3D model into the project using Three.js, Fiber, and Drei, breathing life into it with captivating animations powered by GSAP (Green Sock Animation Platform). For optimal performance and efficiency, I utilized server-side components wherever possible, though animations necessitated a client-sided approach. This portfolio website now stands as a testament to my commitment to delivering exceptional digital experiences, seamlessly blending cutting-edge technology with stunning visuals and fluid animations that captivate and engage visitors.",
      img: "/images/portfoliov2.png",
      slug: "/works/v2",
      projectId: "v2",
      gitLink: "aryanakshit",
      reverse: true,
      liveLink: "https://aryanakshit.vercel.app",
    },
    {
      title: "Personal Website v1",
      date: "August 2023",
      desc: "Designed and developed a new personal portfolio website. Used the latest NextJS 13 and employed its dynamic app routing and server - side components.  Employed the use of REST APIs to get NASA Photo of the Day, A Quote Generator and Idea Generator for bored people.",
      longDesc:
        "I embarked on the rewarding journey of crafting my personal portfolio with an unwavering focus on conceptualizing exceptional UI/UX design and fostering innovation. This endeavor allowed me to explore the latest frontiers of web development and design. Embracing the newly introduced app routing features, I seamlessly integrated dynamic routing within the new app directory, ensuring a robust and responsive user experience. To optimize performance and enhance the portfolio's capabilities, I employed server-side rendering for REST API calls, a decision that proved invaluable when integrating data sources such as NASA's Picture of the Day and the Quotes API. This approach not only improved load times but also offered a smoother user experience, especially for content-rich sections. My commitment to continuous improvement remains at the forefront of this project, as I diligently expand and refine the portfolio's content and overall quality, striving to create an engaging and dynamic showcase of my skills, achievements, and creative endeavors.",
      img: "/images/portfoliov1.png",
      slug: "/works/v1",
      projectId: "v1",
      gitLink: "akshitaryan",
      reverse: false,
      liveLink: "https://akshitaryan.vercel.app",
    },
    {
      title: "Open for Policy & Impact",
      date: "February 2022 - July 2023",
      desc: "Undertook an independent initiative to design and develop a website for OPI, a distinguished consulting firm.  This endeavour allowed me to explore both design and development aspects, contributing to a holistic digital solution.",
      longDesc:
        "In May and June 2023, I embarked on an endeavor to design and develop a website for OPI Consulting Firm, a renowned name in the consulting industry. This project allowed me to immerse myself in the intricate realms of both design and development, aiming to deliver a comprehensive digital solution that would resonate with the firm's values and goals. Taking a hands-on approach, I personally conceived and molded the website's user interface and user experience, with a paramount focus on creating an intuitive and visually captivating journey for visitors. To elevate the site's interactivity and engagement, I harnessed the power of ReactJS and GSAP, introducing subtle yet impactful animations that enriched user interactions. Leveraging the versatility of TailwindCSS, I ensured a functional and modern design language that contributed to a user-friendly interface. Additionally, I prioritized responsiveness across a spectrum of screens to ensure that users across various devices could access a seamless experience. The resulting website stands as a testament to the harmonious blend of innovation and professionalism, aligning perfectly with OPI's identity. For those curious to explore this project firsthand, the website can be visited at opi-new-dev.vercel.app. This independent undertaking underscores my unwavering commitment to delivering meaningful outcomes, showcasing my growing expertise in UI/UX design and front-end development, and my dedication to crafting inclusive digital experiences that leave a lasting impression.",
      img: "/images/opiSc.png",
      slug: "/works/opi",
      projectId: "opi",
      gitLink: "opi-new-dev",
      reverse: true,
      liveLink: "https://opi-new-dev.vercel.app",
    },
    {
      title: "HopRemit",
      date: "May 2023 - July 2023",
      desc: "Undertook an independent initiative to design and develop a website for OPI, a distinguished consulting firm.  This endeavour allowed me to explore both design and development aspects, contributing to a holistic digital solution.",
      longDesc:
        "During my tenure as a dedicated software engineer at moneyHOP, I had the distinct privilege of serving as a foundational member of the tech team, where I played a pivotal role in shaping the landscape of our organization's offerings. My primary responsibilities revolved around spearheading the comprehensive development of the frontend components for an array of cutting-edge financial solutions, including cross-border Neo Bank Solutions, Remittance platforms, and SaaS modules. One of my most noteworthy accomplishments during this time was the inception and construction of the Remittance frontend system from the ground up. This endeavor was no small feat and demanded a deep understanding of intricate technical intricacies, strategic vision, and meticulous attention to detail. I collaborated closely with our esteemed Founder and Product Managers, ensuring that our product roadmap aligned seamlessly with the ever-evolving market demands. The relentless pursuit of perfection and the unyielding drive to achieve product-market fit were central themes throughout this journey. Beyond my core responsibilities, I also took on an active role in the recruitment process for our tech team. Identifying top-tier talent and onboarding them to our dynamic work environment became a part of my mission to fortify the team's capabilities. Moreover, I undertook the role of mentor to junior team members, providing them with guidance and expertise, which was crucial for their growth and development as professionals. I also extended my support by assisting them in resolving complex issues related to customer and vendor onboarding, as well as promptly addressing any bug-related concerns. This collaborative spirit within the team fostered an atmosphere of continuous learning and innovation. The scope of my work at moneyHOP allowed me to explore and harness a wide array of cutting-edge technologies. In particular, my exposure to Progressive Web Apps (PWAs) opened up exciting avenues for enhancing user experiences. Leveraging AWS services such as DynamoDB, AWS Amplify, and s3 Bucket not only expanded my technical skill set but also bolstered our infrastructure, ensuring seamless and reliable services for our customers. In conclusion, my time as a software engineer at moneyHOP was marked by a relentless pursuit of excellence, a commitment to innovation, and a dedication to nurturing a thriving tech team. I am immensely proud of the role I played in bringing our visionary financial solutions to life, and I look forward to building on these experiences to continue driving progress in the dynamic world of software engineering.",
      img: "/images/hopremit.png",
      slug: "/works/hopremit",
      projectId: "hopremit",
      // gitLink: "opi-new-dev",
      reverse: true,
      liveLink: "https://hopremit.moneyhop.co",
    },
  ];

  const selectedProject = projectList.find(
    (project) => project.projectId === params.projectId
  );

  return (
    <div className="flex justify-center w-full min-h-screen bg-slate-950">
      <div
        id="fixed-background"
        className="fixed w-full h-full pointer-events-none blur-[50px]"
      >
        <div
          id="blob"
          className="h-[30vw] w-[27vw] bg-gradient-to-r from-teal-600 to-yellow-800 rounded-full animate-slow-spin"
          style={{
            position: "absolute",
            top: blobPosition.y - 200,
            left: blobPosition.x - 200,
          }}
        ></div>
      </div>
      <div
        id="content"
        className="relative z-50 flex flex-col items-center w-full h-full max-w-[1366px] text-text"
      >
        <Header />
        <div className="min-h-[93vh] flex flex-col items-center my-[10vh] px-[5vw] space-y-10">
          <div className="text-[4vw] w-full text-center font-akira">
            {selectedProject.title}
          </div>
          <img
            src={selectedProject.img}
            className="object-cover w-2/3 border rounded-xl"
          />
          <div className="w-2/3 font-oswald text-[20px] leading-10 p-5 tracking-[1px] rounded-lg bg-[#00000084]">
            {selectedProject.longDesc}
          </div>
          <div className="flex justify-between w-1/3 px-[2vw]">
            <Link
              className="px-5 py-2 border hover:bg-text hover:text-bg transition-all duration-500 rounded-full border-text bg-[#0000006e]"
              target="_blank"
              href={`https://www.github.com/Chicken47/${selectedProject.gitLink}`}
            >
              {"< Source Code />"}
            </Link>
            <Link
              target="_blank"
              className="px-5 py-2 border rounded-full border-text bg-[#0000006e] hover:bg-text hover:text-bg transition-all duration-500"
              href={selectedProject.liveLink}
            >
              {"Live Site ->"}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
