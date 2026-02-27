export default function Education() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education & <span className="text-pink-500">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Education Card */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">
              B.Tech – Computer Science Engineering
            </h3>

            <p className="text-gray-300">
              VIT Bhopal University
            </p>

            <p className="text-gray-400 mt-2">
              CGPA: 7.94 | Graduation: June 2025
            </p>
          </div>

          {/* Certification Card */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">
              Certifications
            </h3>

            <ul className="text-gray-300 space-y-3">
              <li>• AWS Cloud Computing Certification</li>
              <li>• The Bits and Bytes of Computer Networking – Coursera</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}