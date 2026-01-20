import { useState } from "react";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";

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

  return (
    <>
      {/* INTRO SCREEN */}
      {!introDone && (
        <IntroAnimation onFinish={() => setIntroDone(true)} />
      )}

      {/* MAIN WEBSITE */}
      {introDone && (
        <div className="relative bg-black text-white overflow-x-hidden">
          <CustomCursor />
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
