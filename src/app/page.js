import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import MiniProjects from "@/components/MiniProjects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Preloader />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <MiniProjects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
