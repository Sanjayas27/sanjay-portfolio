import { motion } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      title: "Grow My Therapy",
      description:
        "High-performance healthcare website built using Next.js and Tailwind CSS with server-side rendering and responsive UI.",
      tech: ["Next.js", "Tailwind CSS", "Netlify"],
      live: "https://grow-my-therapy-5npd.vercel.app/",
      github: "https://github.com/Sanjayas27/Grow-My-therapy",
    },
    {
    title: "E-Commerce Shopping Website",
    description:
      "Fully responsive frontend e-commerce application with product listing, cart functionality, and state-managed shopping experience.",
    tech: ["React", "JavaScript", "CSS", "Cart Logic"],
    live: "https://sanjayas27.github.io/bizzare/",
    github: "https://github.com/Sanjayas27/bizzare",
  },
  {
    title: "HireDone – Local Job Connect Platform",
    description:
      "Platform connecting local employers and job seekers, enabling job postings and direct application workflows with user-focused design.",
    tech: ["React / JS", "Frontend Architecture", "UI Design"],
    live: "https://sanjayas27.github.io/hiredone/",
    github: "https://github.com/Sanjayas27/hiredone",
  },

  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-pink-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

         {projects.map((project, index) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
              key={index}
              className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-slate-700 px-3 py-1 text-sm rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  className="flex-1 text-center bg-gradient-to-r from-pink-500 to-purple-500 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  className="flex-1 text-center border border-gray-500 py-2 rounded-lg hover:bg-slate-700 transition"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
      <div className="text-center mt-16">
  <a
    href="/projects"
    className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
  >
    Explore All Projects →
  </a>
</div>
    </section>
  );
}