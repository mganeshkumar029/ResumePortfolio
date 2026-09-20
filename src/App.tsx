import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import MarqueeSection from "./components/MarqueeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";

export default function App() {
  const [entranceComplete, setEntranceComplete] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setEntranceComplete(true), 800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div>
      <Navbar entranceComplete={entranceComplete} />
      <main>
        <Hero entranceComplete={entranceComplete} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <MarqueeSection />
        <ContactSection />
      </main>
      <Footer />
      <CallButton />
    </div>
  );
}
