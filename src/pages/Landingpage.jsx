import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Hero";
import Aboutme from "../layouts/Aboutme";
import EngineeringFocus from "../layouts/EngineeringFocus";
import TechStack from "../components/skills/TechStack";
import Projects from "../layouts/Projects";
import Experience from "../layouts/Experience";
import Education from "../layouts/Education";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import EngineeringBackground from "../components/common/EngineeringBackground";

function Landingpage() {
  return (
    <div className="portfolio-shell">
      <EngineeringBackground />
      <Navbar />
      <main>
        <Hero />
        <Aboutme />
        <EngineeringFocus />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Landingpage;
