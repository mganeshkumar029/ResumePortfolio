import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
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
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <MarqueeSection />
        <ContactSection />
      </main>
      <Footer />
      <CallButton />
    </div>
  );
}
