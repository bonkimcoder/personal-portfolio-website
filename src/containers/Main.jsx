import Divider from "../components/Divider";
import MainHeadings from "../components/MainHeadings";
import Counter from "../components/Counter";
import Contact from "../components/Contact";
import { skills, testimonials } from "../components/Data";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Testmonials from "../components/Testmonials";

const Main = () => {
  return (
    <main className="max-w-5xl mx-auto ">
      <section
        id="hero"
        className="flex flex-col-reverse justify-center sm:flex-row sm:justify-between p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
      >
        <Hero />
      </section>
      <Divider />
      <section
        id="numbers"
        className="p-6 my-12 scroll-mt-20 flex flex-col justify-center  gap-8 mb-12 "
      >
        <MainHeadings text="Language Proficiency" />
        <Counter />
      </section>
      <Divider />
      <section
        id="skills"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <MainHeadings text="My Skill Set" />
        <Skills skills={skills} />
      </section>
      <Divider />
      <section
        id="testimonials"
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <MainHeadings text="Testmonials" />
        <Testmonials testimonials={testimonials} />
      </section>
      <Divider />
      <section id="contact" className="p-6 my-12 scroll-mt-16">
        <MainHeadings text="Contact Me" />
        <Contact />
      </section>
    </main>
  );
};

export default Main;
