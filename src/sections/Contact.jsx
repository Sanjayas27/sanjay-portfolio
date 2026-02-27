export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s <span className="text-pink-500">Connect</span>
        </h2>

        <p className="text-gray-300 mb-10 text-lg">
          I'm open to entry-level and remote opportunities in web development.
          If you'd like to collaborate or discuss potential roles, feel free to reach out.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjay.s27112002@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
>
  Send Email
</a>

          <a
            href="/Sanjay_AS_Resume.pdf"
            download
            className="border border-gray-500 px-8 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            Download Resume
          </a>

        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-gray-400">

          <a
            href="https://github.com/sanjayas27"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sanjay-a-s-6b776621b"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}