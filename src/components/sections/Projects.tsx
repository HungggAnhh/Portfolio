import { useState, useRef, useEffect, memo } from "react";
import { Eye, Github, ExternalLink, Code, Calendar } from "lucide-react";
import { PROJECTS } from "@/data/project";
import type { Project } from "@/data/project";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16 space-y-4">
    <h2 className="section-title">{title}</h2>
    <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

/* =======================
   Project Card (Optimized)
======================= */
type ProjectCardProps = {
  project: Project;
};
const ProjectCard = memo(({ project }: { project: Project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/95 dark:bg-slate-900/95 border shadow-lg transition-transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Status */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs rounded-full bg-green-600 text-white">
            {project.status}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-4 left-4 flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-black/60 text-white">
          <Calendar size={12} />
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold">{project.name}</h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800"
            >
              <Code size={10} className="inline mr-1" />
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 text-sm border rounded-lg py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 text-sm bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
});
/* =======================
   Projects Section
======================= */
export default function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container-default">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {PROJECTS.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
