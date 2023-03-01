import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import avatarImage from "../assets/images/avatar3.jpg";

type Props = {
};

const Home = ({ }: Props) => {
  return (
    <div className="bg-[#131313] bg-hero-pattern text-white h-screen font-vazir overflow-scroll z-0 overflow-x-hidden ">
      <Head>
        <title>Arash Hosseini Portfolio</title>
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

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Project />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src={avatarImage}
              width={40}
              height={40}
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

