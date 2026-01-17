import React, { useState } from "react";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import OverlayMenu from "./components/OverlayMenu";
import ParticlesBackground from "./components/ParticlesBackground";
import IntroAnimation from "./components/introAnimation";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* INTRO SCREEN */}
      {!introDone && (
        <IntroAnimation onFinish={() => setIntroDone(true)} />
      )}

      {/* MAIN WEBSITE */}
      {introDone && (
        <div className="relative text-white bg-black">
          <CustomCursor />
          <ParticlesBackground />

          <OverlayMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />

          <Navbar />

          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
