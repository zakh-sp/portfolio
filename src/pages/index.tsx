import Head from "next/head";
import Backdrop from "src/components/layout/Backdrop/Backdrop";
import Footer from "src/components/layout/Footer/Footer";
import Navbar from "src/components/layout/Navbar/Navbar";
import ScrollProgress from "src/components/layout/ScrollProgress/ScrollProgress";
import About from "src/components/sections/About/About";
import Contact from "src/components/sections/Contact/Contact";
import Experience from "src/components/sections/Experience/Experience";
import Hero from "src/components/sections/Hero/Hero";
import Projects from "src/components/sections/Projects/Projects";
import Skills from "src/components/sections/Skills/Skills";
import Testimonials from "src/components/sections/Testimonials/Testimonials";
import Writing from "src/components/sections/Writing/Writing";
import { profile } from "src/data/profile";
import { asset } from "src/lib/asset";

const title = `${profile.name} — ${profile.role}`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={profile.heroIntro} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={profile.heroIntro} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={asset("/images/hero.jpg")} />
        <link rel="icon" href={asset("/favicon.ico")} />
      </Head>

      <Backdrop />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
