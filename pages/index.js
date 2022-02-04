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
