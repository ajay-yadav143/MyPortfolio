<<<<<<< HEAD
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

/* ===================== DATA ===================== */

const experiences = [
  {
    role: "Graduate Engineer",
    company: "HCL Technologies",
    duration: "2024 – 2025",
    description:
      "Built frontend of GenAI-powered PV Intake App with Next.js & TypeScript for US client.",
  },
  {
    role: "Web Developer Intern",
    company: "Mobisoft Technologies",
    duration: "2023 – 2024",
    description: "Gained hands-on web development experience.",
  },
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2023",
    description:
      "Built high-performance apps, integrated AI features, improved engagement by 10%.",
  },
];

/* ===================== ITEM ===================== */

function ExperienceItem({
  exp,
  idx,
  start,
  end,
  scrollYProgress,
  layout,
}) {
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const x = useTransform(
    scrollYProgress,
    [start, end],
    [layout === "mobile" ? 0 : -24, 0]
  );

  return (
    <div className="relative flex items-start">
      {/* Timeline Dot */}
      <motion.div
        className="absolute -left-[14px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale, opacity }}
      />

      {/* Card */}
      <motion.article
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-lg font-semibold break-words">
          {exp.role}
        </h3>

        <p className="text-sm text-gray-400 mb-2 break-words">
          {exp.company} | {exp.duration}
        </p>

        <p className="text-sm text-gray-300 break-words">
          {exp.description}
        </p>
      </motion.article>
    </div>
  );
}

/* ===================== SECTION ===================== */

export default function Experience() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  /* ---------- Mobile Detection ---------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------- Scene Height ---------- */
  const SCENE_HEIGHT_VH = isMobile
    ? 160 * experiences.length
    : 120 * experiences.length;

  /* ---------- Scroll ---------- */
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  /* ---------- Thresholds ---------- */
  const thresholds = useMemo(
    () => experiences.map((_, i) => (i + 1) / experiences.length),
    []
  );

  /* ---------- Vertical Line Size ---------- */
  const lineSize = useTransform(
    scrollYProgress,
    (v) => `${v * 100}%`
  );

  return (
    <section id="experience" className="relative bg-black text-white">
      <div
        ref={sceneRef}
        className="relative"
        style={{
          height: `${SCENE_HEIGHT_VH}vh`,
          minHeight: "120vh",
        }}
      >
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center">
            Experience
          </h2>

          {/* Content */}
          <div className="flex flex-1 justify-center px-6 pb-10">
            {/* Desktop Layout */}
            {!isMobile && (
              <div className="relative w-full max-w-md">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-[6px] bg-white rounded origin-top"
                    style={{ height: lineSize }}
                  />
                </div>

                {/* Items */}
                <div className="relative flex flex-col gap-10 ml-10 mt-6">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Layout */}
            {isMobile && (
              <div className="relative w-full max-w-md">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-[6px] bg-white rounded origin-top"
                    style={{ height: lineSize }}
                  />
                </div>

                {/* Items */}
                <div className="relative flex flex-col gap-10 ml-10 mt-6">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
=======
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

/* ===================== DATA ===================== */

const experiences = [
  {
    role: "Graduate Engineer",
    company: "HCL Technologies",
    duration: "2024 – 2025",
    description:
      "Built frontend of GenAI-powered PV Intake App with Next.js & TypeScript for US client.",
  },
  {
    role: "Web Developer Intern",
    company: "Mobisoft Technologies",
    duration: "2023 – 2024",
    description: "Gained hands-on web development experience.",
  },
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2023",
    description:
      "Built high-performance apps, integrated AI features, improved engagement by 10%.",
  },
];

/* ===================== ITEM ===================== */

function ExperienceItem({
  exp,
  idx,
  start,
  end,
  scrollYProgress,
  layout,
}) {
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const x = useTransform(
    scrollYProgress,
    [start, end],
    [layout === "mobile" ? 0 : -24, 0]
  );

  return (
    <div className="relative flex items-start">
      {/* Timeline Dot */}
      <motion.div
        className="absolute -left-[14px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale, opacity }}
      />

      {/* Card */}
      <motion.article
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-lg font-semibold break-words">
          {exp.role}
        </h3>

        <p className="text-sm text-gray-400 mb-2 break-words">
          {exp.company} | {exp.duration}
        </p>

        <p className="text-sm text-gray-300 break-words">
          {exp.description}
        </p>
      </motion.article>
    </div>
  );
}

/* ===================== SECTION ===================== */

export default function Experience() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  /* ---------- Mobile Detection ---------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------- Scene Height ---------- */
  const SCENE_HEIGHT_VH = isMobile
    ? 160 * experiences.length
    : 120 * experiences.length;

  /* ---------- Scroll ---------- */
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  /* ---------- Thresholds ---------- */
  const thresholds = useMemo(
    () => experiences.map((_, i) => (i + 1) / experiences.length),
    []
  );

  /* ---------- Vertical Line Size ---------- */
  const lineSize = useTransform(
    scrollYProgress,
    (v) => `${v * 100}%`
  );

  return (
    <section id="experience" className="relative bg-black text-white">
      <div
        ref={sceneRef}
        className="relative"
        style={{
          height: `${SCENE_HEIGHT_VH}vh`,
          minHeight: "120vh",
        }}
      >
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center">
            Experience
          </h2>

          {/* Content */}
          <div className="flex flex-1 justify-center px-6 pb-10">
            {/* Desktop Layout */}
            {!isMobile && (
              <div className="relative w-full max-w-md">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-[6px] bg-white rounded origin-top"
                    style={{ height: lineSize }}
                  />
                </div>

                {/* Items */}
                <div className="relative flex flex-col gap-10 ml-10 mt-6">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Layout */}
            {isMobile && (
              <div className="relative w-full max-w-md">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-[6px] bg-white rounded origin-top"
                    style={{ height: lineSize }}
                  />
                </div>

                {/* Items */}
                <div className="relative flex flex-col gap-10 ml-10 mt-6">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> 53f87c2 (Initial Setup Complete)
