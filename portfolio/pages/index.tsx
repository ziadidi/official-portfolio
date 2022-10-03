import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div
      className="scroll-smooth bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thumb-rounded-md scrollbar-track-gray-400/20
    scrollbar-thumb-[#2471A3]/80"
    >
      <Head>
        <title>Diane's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-centr justify-center">
            <img
              className="object-cover h-16 w-16 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://cdn.discordapp.com/attachments/947981440530911263/1025519272555991100/asdp_logo_4000.PNG"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
