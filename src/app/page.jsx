import AboutHome from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import HomePage from "./home";
import Works from "./works";

export default function Home() {
  return (
    <main className="flex justify-center w-full min-h-screen bg-bg text-text">
      <div className="flex items-center flex-col w-full max-w-[1366px]">
        <Header />
        <HomePage />
        <AboutHome />
        <Works />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
