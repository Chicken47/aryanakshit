import AboutHome from "./home/about";
import Contact from "./home/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./home/home";
import Works from "./home/works";

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
