import { useMemo } from "react";

/* Desktop images */
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";

/* Mobile images */
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";

const useIsMobile = () => window.innerWidth < 640;

export default function Projects() {
  const isMobile = useIsMobile();

  const projects = useMemo(
    () => [
      {
        title: "nk studio",
        link: "https://www.nk.studio/",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "Gamily",
        link: "https://gamilyapp.com/",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Hungry Tiger",
        link: "https://www.eathungrytiger.com/",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-16">
        {projects.map((project) => (
          <div key={project.title} className="space-y-6">
            {/* Image */}
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[60vh] object-cover"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-semibold text-center">
              {project.title}
            </h3>

            {/* Button */}
            <div className="flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

