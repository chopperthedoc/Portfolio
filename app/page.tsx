import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import GetApp from "@/components/GetApp";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero id="hero" />
      <hr className="my-2 border-t border-white" />
      <AboutMe id="about-me" />

      <Skills id="skills" />

      <Projects id="projects" />
    </>
  );
}
