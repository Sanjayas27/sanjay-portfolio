import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
>

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Sanjay A.S.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Computer Science Engineer from VIT Bhopal (CGPA 7.94) passionate about 
            building high-performance web applications using React, Next.js 
            and modern UI systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
            >
              Contact Me
            </a>

            <a
              href="/Sanjay_AS_Resume.pdf"
              target="_blank"
              className="border border-gray-500 px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
            
            <img
              src="/your-photo.jpg"
              alt="Sanjay"
              className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl"
            />
          </div>
        </div>

      </motion.div>
    </section>
  );
}