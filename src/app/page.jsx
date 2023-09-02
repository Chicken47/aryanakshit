import AboutHome from "./home/about";
import Contact from "./home/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./home/home";
import Works from "./home/works";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div
        id="fixed-background"
        className="h-full w-full fixed blur-[50px] pointer-events-none"
      >
        <div className="h-[40vw] w-[39vw] bg-gradient-to-br from-red-500 to-blue-600 rounded-full animate-slow-spin"></div>
        <div className="h-[50vw] w-[40vw] bg-gradient-to-r from-indigo-800 to-cyan-500 rounded-full animate-slow-spin -mt-[45vw] ml-[50vw]"></div>
        <div className="h-[40vw] w-[38vw] bg-gradient-to-r from-amber-500 to-orange-800 rounded-full animate-slow-spin -mt-[29vw] ml-[14vw]"></div>
        <div className="h-[38vw] w-[38vw] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-slow-spin -mt-[25vw] ml-[56vw]"></div>
      </div>
      <div
        id="content"
        className="relative z-50 flex flex-col items-center w-full bg-[#000000c5] h-full max-w-[1366px] text-text"
      >
        <Header />
        <HomePage />
        <AboutHome />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
