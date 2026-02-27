export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS","Wordpress"],
    },
    {
      title: "Tools & Cloud",
      skills: ["AWS (Certified)", "Git", "GitHub", "Firebase"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="text-pink-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-pink-500">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 px-4 py-2 rounded-full text-sm hover:bg-pink-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}