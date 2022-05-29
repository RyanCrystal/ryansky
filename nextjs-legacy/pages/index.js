import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Nav from "../components/Nav";
import { MainSection } from "../components/MainSection";
import { Projects } from "../components/Projects";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

export default function Home() {
  const homeRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const contactRef = React.useRef(null);

  return (
    <>
      <Nav />
      <main id="home" ref={homeRef}>
        <MainSection />
      </main>
      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>
      <section id="about" ref={aboutRef}>
        <AboutMe />
      </section>
      <section id="contact" ref={contactRef}>
        <ContactMe />
      </section>
    </>
  );
}
