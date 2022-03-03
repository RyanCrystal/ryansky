import styles from "../styles/Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

export function ProjectItem({ project }) {
  return (
    <div className={styles.project_item}>
      <div className={styles.project_image_container}>
        <a href={project.link} target="_blank" rel="noreferrer">
          <img src={project.image_src} layout="fill" alt="" />
        </a>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className={styles.project_item_btn}
      >
        View
      </a>
      <div className={styles.project_text}>
        <h1>{project.title}</h1>
        <h3>{project.tech}</h3>
      </div>
      <div className={styles.github}>
        <a
          href={project.github_link}
          target="_blank"
          style={{ color: "black" }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}
