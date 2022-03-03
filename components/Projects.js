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
    tech: "ReactJS",
    link: "/metronome",
    github_link: "https://github.com/RyanCrystal/ryansky"
  },
  {
    id: 2,
    image_src: "/img/projects/project2.jpg",
    title: "Real-Time Chat Application",
    tech: "NodeJS, Express, Socket.IO",
    link: "https://chat.ryansky.org",
    github_link: "https://github.com/RyanCrystal/chat"
  },
  {
    id: 3,
    image_src: "/img/projects/project3.jpg",
    title: "File Share Drive",
    tech: "NodeJS, Express, Pug",
    link: "https://drive.ryansky.org",
    github_link: "https://github.com/RyanCrystal/drive"
  },
  {
    id: 4,
    image_src: "/img/projects/laundry.jpeg",
    title: "Laundry Shop",
    tech: "JavaScript, CSS",
    link: "/laundry.html",
    github_link: "https://github.com/RyanCrystal/laundry"
  },
  {
    id: 5,
    image_src: "/img/projects/business.jpeg",
    title: "Business company",
    tech: "Bootstrap, JavaScript",
    link: "/fs.html",
    github_link: "https://github.com/RyanCrystal/fs1"
  },
  {
    id: 6,
    image_src: "/img/projects/restaurant.jpeg",
    title: "Restaurant",
    tech: "JavaScript, Bootstrap",
    link: "/bs.html",
    github_link: "https://github.com/RyanCrystal/bs1"
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
