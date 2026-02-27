import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">
      <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="max-w-5xl mx-auto text-center"
>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About <span className="text-pink-500">Me</span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a Computer Science Engineering graduate from VIT Bhopal 
          with a CGPA of 7.94. I specialize in building modern, responsive, 
          and scalable web applications using React, Next.js, and Tailwind CSS.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed">
          I enjoy transforming real-world business requirements into 
          high-performance digital solutions. My focus is on clean UI design, 
          performance optimization, and writing maintainable code.
        </p>

        <div className="mt-10 flex justify-center gap-8 flex-wrap">

          <div className="bg-slate-800 px-6 py-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-pink-500">7.94</h3>
            <p className="text-gray-400">CGPA</p>
          </div>

          <div className="bg-slate-800 px-6 py-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-pink-500">AWS</h3>
            <p className="text-gray-400">Certified</p>
          </div>

          <div className="bg-slate-800 px-6 py-4 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-pink-500">2025</h3>
            <p className="text-gray-400">Graduate</p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}