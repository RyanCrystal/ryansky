import styles from "../styles/Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ProjectItem } from "./ProjectItem";
// import Image from "next/image";
// import project1_image from "../public/img/projects/project1.jpg";
// import project2_image from "../public/img/projects/project2.jpg";
// import project3_image from "../public/img/projects/project3.jpg";

const projects = [
  {
    id: 1,
    image_src: "/img/projects/project1.jpg",
    title: "Customized metronome",
    tech: "ReactJs",
    link: "/metronome",
    github_link: "https://github.com/RyanCrystal/ryansky"
  },
  {
    id: 2,
    image_src: "/img/projects/project2.jpg",
    title: "Real-Time Chat Application",
    tech: "Socket.io",
    link: "https://chat.ryansky.org",
    github_link: "https://github.com/RyanCrystal/chat"
  },
  {
    id: 3,
    image_src: "/img/projects/project3.jpg",
    title: "File Share Drive",
    tech: "NodeJs, Express, Pug",
    link: "https://drive.ryansky.org",
    github_link: "https://github.com/RyanCrystal/drive"
  }
];
export function Projects() {
  return (
    <>
      <div className={styles.projects_container}>
        <h1 className={styles.projects_big_title}>PROJECTS</h1>
        <div className={styles.projects_items}>
          {projects.map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </div>
      </div>
    </>
  );
}
