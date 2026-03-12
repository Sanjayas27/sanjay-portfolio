import { motion } from "framer-motion";

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 px-6 bg-slate-950 relative overflow-hidden">

      {/* Background glow accents */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-pink-500">Venture</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Beyond freelance work — a company I founded to build free websites for others and incubate startup ideas.
          </p>
        </motion.div>

        {/* Main Darkfox card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500" />

          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">

            {/* Left — text content */}
            <div>
              {/* Founder badge */}
              <span className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-400 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-widest uppercase border border-pink-500/30">
                <img src="/darkfox.png" alt="DarkFox" className="w-4 h-4 object-contain rounded-sm" />
                Founder
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Dark<span className="text-pink-500">Fox</span>
              </h3>

              <p className="text-gray-400 text-sm italic mb-5">
                "Where Ideas Become Empires"
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                DarkFox is a digital venture I started to deliver{" "}
                <span className="text-white font-medium">high-quality websites and applications</span>{" "}
                to individuals and small businesses — making professional web presence accessible to 
                everyone. It also serves as a parent company for my upcoming startup ideas, 
                which will be incubated and launched under this brand.
              </p>

              {/* What it does */}
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Free website development for individuals & small businesses",
                  "Parent company for future startup projects",
                  "A network connecting people with digital solutions",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "Tailwind CSS", "Netlify", "React"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 px-3 py-1 text-sm rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex gap-4">
                <a
                  href="https://darkfox01.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-pink-500 to-purple-500 py-3 rounded-xl font-semibold hover:opacity-90 hover:scale-105 transition duration-300"
                >
                  Visit DarkFox →
                </a>
              </div>
            </div>

            {/* Right — visual panel */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">

                {/* Glowing card behind */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl scale-105" />

                {/* Logo / brand display */}
                <div className="relative bg-slate-900 rounded-2xl border border-slate-700 p-8 flex flex-col items-center gap-6 text-center">

                  {/* DarkFox logo */}
                  <img
                    src="/darkfox.png"
                    alt="DarkFox Logo"
                    className="w-36 h-36 object-contain rounded-xl"
                  />

                  <div>
                    <p className="text-gray-500 text-xs mt-1 tracking-widest uppercase">
                      Digital Ventures
                    </p>
                  </div>

                  <div className="w-full border-t border-slate-700 pt-4 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-pink-500 text-xl font-bold">∞</p>
                      <p className="text-gray-500 text-xs mt-1">Ideas in progress</p>
                    </div>
                    <div>
                      <p className="text-pink-500 text-xl font-bold">Free</p>
                      <p className="text-gray-500 text-xs mt-1">Websites for all</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live & Active
                  </span>

                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
