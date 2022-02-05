import styles from "../styles/Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ProjectItem } from "./ProjectItem";

const projects = [
  {
    id: 1,
    image_src: "../img/projects/project1.jpg",
    title: "Customized metronome",
    tech: "ReactJs",
    link: "/metronome",
    github_link: "/"
  },
  {
    id: 2,
    image_src: "../img/projects/project2.jpg",
    title: "Real-Time Chat Application",
    tech: "ReactJs, Socket.io",
    link: "https://chat.ryansky.org",
    github_link: "/"
  },
  {
    id: 3,
    image_src: "../img/projects/project3.jpg",
    title: "Real-Time Chat Application",
    tech: "ReactJs, Socket.io",
    link: "/",

    github_link: "/"
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
