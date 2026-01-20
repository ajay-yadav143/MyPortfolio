<<<<<<< HEAD
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

/* Desktop images */
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";

/* Mobile images */
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";

/* ---------- Mobile Hook ---------- */
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  /* ---------- PROJECT DATA ---------- */
  const projects = useMemo(
    () => [
      {
        title: "nk studio",
        link: "https://www.nk.studio/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "Gamily",
        link: "https://gamilyapp.com/",
        bgColor: "#3884d3",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Hungry Tiger",
        link: "https://www.eathungrytiger.com/",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

  /* ---------- SCROLL LOGIC ---------- */
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <div className="relative w-full max-w-5xl px-6">
          <AnimatePresence mode="wait">
            {projects.map(
              (project, idx) =>
                idx === activeIndex && (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* ---------- IMAGE CARD ---------- */}
                    <div
                      className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
                        ${isMobile ? "mb-6 rounded-lg" : "mb-10 rounded-xl"}
                        h-[62vh] sm:h-[66vh]`}
                      style={{
                        zIndex: 10,
                        transition: "box-shadow 250ms ease",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
                        style={{
                          position: "relative",
                          zIndex: 10,
                          filter:
                            "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                          transition: "filter 200ms ease",
                        }}
                      />

                      {/* Overlay gradient */}
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          zIndex: 11,
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.4) 40%)",
                        }}
                      />
                    </div>

                    {/* ---------- TITLE ---------- */}
                    <motion.h3
                      className="text-3xl sm:text-4xl font-bold text-center mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* ---------- VIEW PROJECT BUTTON ---------- */}
          <div
            className={`absolute ${
              isMobile ? "bottom-20" : "bottom-10"
            } left-1/2 -translate-x-1/2`}
          >
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
              aria-label={`View ${activeProject.title}`}
            >
              View Project
            </a>
          </div>

          {/* ---------- DOT INDICATORS ---------- */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {projects.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === activeIndex
                    ? "bg-white scale-125"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
=======
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

/* Desktop images */
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";

/* Mobile images */
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";

/* ---------- Mobile Hook ---------- */
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  /* ---------- PROJECT DATA ---------- */
  const projects = useMemo(
    () => [
      {
        title: "nk studio",
        link: "https://www.nk.studio/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "Gamily",
        link: "https://gamilyapp.com/",
        bgColor: "#3884d3",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Hungry Tiger",
        link: "https://www.eathungrytiger.com/",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

  /* ---------- SCROLL LOGIC ---------- */
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <div className="relative w-full max-w-5xl px-6">
          <AnimatePresence mode="wait">
            {projects.map(
              (project, idx) =>
                idx === activeIndex && (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* ---------- IMAGE CARD ---------- */}
                    <div
                      className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
                        ${isMobile ? "mb-6 rounded-lg" : "mb-10 rounded-xl"}
                        h-[62vh] sm:h-[66vh]`}
                      style={{
                        zIndex: 10,
                        transition: "box-shadow 250ms ease",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
                        style={{
                          position: "relative",
                          zIndex: 10,
                          filter:
                            "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                          transition: "filter 200ms ease",
                        }}
                      />

                      {/* Overlay gradient */}
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          zIndex: 11,
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.4) 40%)",
                        }}
                      />
                    </div>

                    {/* ---------- TITLE ---------- */}
                    <motion.h3
                      className="text-3xl sm:text-4xl font-bold text-center mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* ---------- VIEW PROJECT BUTTON ---------- */}
          <div
            className={`absolute ${
              isMobile ? "bottom-20" : "bottom-10"
            } left-1/2 -translate-x-1/2`}
          >
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
              aria-label={`View ${activeProject.title}`}
            >
              View Project
            </a>
          </div>

          {/* ---------- DOT INDICATORS ---------- */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {projects.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === activeIndex
                    ? "bg-white scale-125"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> 53f87c2 (Initial Setup Complete)
