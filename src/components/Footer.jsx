export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-pink-500">
            Sanjay A.S.
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Building modern, scalable and user-focused web applications.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#about" className="hover:text-pink-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-pink-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-pink-500 transition">
            Contact
          </a>
        </div>

        {/* Right Side - Social */}
        <div className="flex gap-6 text-gray-400 text-sm">
         <a
  href="https://github.com/sanjayas27"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-pink-500 transition cursor-pointer"
>
            GitHub
          </a>
         <a
  href="https://www.linkedin.com/in/sanjay-a-s-6b776621b"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-pink-500 transition cursor-pointer"
>LinkedIn
          </a>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs mt-8">
        © {new Date().getFullYear()} Sanjay A.S. All rights reserved.
      </div>
    </footer>
  );
}