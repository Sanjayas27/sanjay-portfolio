import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(section);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-pink-500">
          Sanjay A.S.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a
  href="#about"
  className={`transition ${
    active === "about" ? "text-pink-500" : "hover:text-pink-500"
  }`}
>About</a>
          <a
  href="#skills"
  className={`transition ${
    active === "about" ? "text-pink-500" : "hover:text-pink-500"
  }`}
>Skills</a>
          <a
  href="#projects"
  className={`transition ${
    active === "about" ? "text-pink-500" : "hover:text-pink-500"
  }`}
>Projects</a>
          <a
  href="#contact"
  className={`transition ${
    active === "about" ? "text-pink-500" : "hover:text-pink-500"
  }`}
>Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-4 flex flex-col gap-4 text-gray-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}