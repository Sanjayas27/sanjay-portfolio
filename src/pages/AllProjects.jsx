import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import growImg from "../assets/growmytherapy.png";
import ecommerceImg from "../assets/ecommerce.png";
import hiredoneImg from "../assets/hiredone.png";
import metroImg from "../assets/metro.png";



export default function AllProjects() {
  const projects = [
    {
      title: "Grow My Therapy",
      description:
        "Healthcare platform built using Next.js with optimized SSR architecture and modern UI.",
    image: growImg,
      live: "https://grow-my-therapy-5npd.vercel.app/",
      github: "https://github.com/Sanjayas27/Grow-My-therapy",
    },
    {
      title: "E-Commerce Shopping Website",
      description:
        "Frontend shopping platform with cart logic, dynamic product rendering and state handling.",
      image: ecommerceImg,
      live: "https://sanjayas27.github.io/bizzare/",
      github: "https://github.com/Sanjayas27/bizzare",
    },
    {
      title: "HireDone – Job Connect Platform",
      description:
        "Local employer-job seeker platform enabling job posting and hiring workflows.",
    image: hiredoneImg,
      live: "https://sanjayas27.github.io/hiredone/",
      github: "https://github.com/Sanjayas27/hiredone",
    },
    {
      title: "Metro Ticket Booking App",
      description:
        "Metro booking system with fare calculation and route selection logic.",
    image: metroImg,
      live: "https://your-live-link.com",
      github: "https://github.com/yourusername/project4",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-24 max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold text-center mb-16">
        My <span className="text-pink-500">Projects</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-slate-900/70 backdrop-blur-lg border border-slate-800 p-8 rounded-2xl hover:scale-105 hover:border-pink-500/50 transition duration-300"
          >

            {/* Fake Preview Area */}
           <div className="h-48 overflow-hidden rounded-xl mb-6">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover hover:scale-110 transition duration-500"
  />
</div>

            <h3 className="text-2xl font-semibold text-pink-500 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex gap-4">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-lg font-medium hover:scale-105 transition"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-slate-800 transition"
              >
                GitHub
              </a>

            </div>

          </motion.div>
        ))}

      </div>

      <div className="text-center mt-20">
        <Link
          to="/"
          className="border border-gray-500 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          ← Back to Home
        </Link>
      </div>

    </div>
  );
}