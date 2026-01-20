import { motion } from "framer-motion";

const experiences = [
  {
    role: "Graduate Engineer",
    company: "HCL Technologies",
    duration: "205 SEPT – 2025 NOV",
    description:
      "Built frontend of GenAI-powered GenAI PV Intake App using Next.js and TypeScript for a US client.",
  },
  {
    role: "Web Developer Intern",
    company: "Mobisoft Technologies",
    duration: "2024 DEC – 2025 JAN",
    description: "Gained hands-on experience in modern web development.",
  },
  {
    role: "Web Developer",
    company: "Brain Mentors",
    duration: "2025 - MAY-JUNE",
    description:
      "Built high-performance applications and integrated AI features.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-20 px-6"
    >
      <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-16">
        Experience
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-white/20" />

        <div className="flex flex-col gap-14 pl-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-white" />

              {/* Card */}
              <div className="bg-gray-900/80 border border-gray-700/60 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold">
                  {exp.role}
                </h3>

                <p className="text-sm text-gray-400 mb-2">
                  {exp.company} · {exp.duration}
                </p>

                <p className="text-sm text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
