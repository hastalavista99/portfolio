import React from "react";
import type { Project } from "../types";

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TailwindCSS.",
    techStack: ["Vite", "React", "Tailwind", "TypeScript"],
    github: "https://github.com/hastalavista99/portofolio.git",
    demo: "#",
  },
  {
    title: "Sacco Manager",
    description: "A simple task management app for teams.",
    techStack: ["Codeigniter", "PHP", "MySQL", "M-PESA", "Bulk SMS"],
    github: "https://github.com/hastalavista99/CodeIgniter-Sacco-Portal.git",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description: "A blogging platform with authentication and rich text editing.",
    techStack: ["CodeIgniter", "PHP", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce Store",
    description: "A modern e-commerce store with payment integration.",
    techStack: ["React", "Tailwind", "PHP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application for web and mobile.",
    techStack: ["React", "TypeScript", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "A dashboard for visualizing business analytics.",
    techStack: ["React", "Tailwind", "MySQL"],
    github: "#",
    demo: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <a href={project.github} className="px-4 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition text-sm font-medium" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github me-2"></i>GitHub</a>
                <a href={project.demo} className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-medium" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop me-2"></i>Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
