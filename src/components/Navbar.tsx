import React from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-bold text-lg text-gray-900 hidden sm:inline">Jackson Githumu</span>
        <ul className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
