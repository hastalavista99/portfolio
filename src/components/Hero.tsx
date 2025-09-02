import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white border-b">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-12">
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src="/src/assets/profile.jpeg"
            alt="Profile"
            className="w-44 h-44 object-cover rounded-full border-4 border-gray-200 shadow-lg sm:mt-2"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
            Hi, I'm <span className="block">Jackson Githumu Njung’e</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-2">Full-Stack Developer</h2>
          <p className="text-lg text-gray-700 mb-4"><i className="fa-solid fa-location-dot me-2"></i>Nairobi, Kenya</p>
          <p className="text-gray-600 mb-8 max-w-xl">
            I design and build scalable web solutions for businesses and startups. Passionate about clean code, modern UI, and delivering impactful results.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-2 border border-blue-700 text-blue-700 rounded-lg font-medium hover:bg-blue-700 hover:text-white transition"
            >
              <i className="fa-solid fa-table-list me-2"></i>
              View Projects
            </a>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vREjn8IkFUo9738qkVVDOElIzx7uwukICnWPcj2c5_Bgsjv54WOgA37Zln-kUJQt_X6C-LDpSzYDjE3/pub"
              target="_blank"
              className="px-6 py-2 border border-gray-400 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              <i className="fa-solid fa-download me-2"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
