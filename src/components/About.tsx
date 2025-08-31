import React from "react";

const skills = ["React", "TypeScript", "Vite","React Router v7", "Tailwind", "CodeIgniter", "PHP", "MySQL", "Payment APIs", "Bulk SMS Integration"];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="mb-6 text-gray-700">I am a passionate developer focused on building scalable and maintainable web applications. I love working with modern technologies and learning new things.</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
