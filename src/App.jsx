import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <div className="relative bg-slate-950 text-white font-sans pt-20 overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse pointer-events-none"></div>
      <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse pointer-events-none"></div>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>

    </div>
  );
}

export default App;