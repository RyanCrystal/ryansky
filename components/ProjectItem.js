import styles from "../styles/Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function ProjectItem({ project }) {
  return (
    <div className={styles.project_item}>
      <div className={styles.project_image_container}>
        <a href={project.link} target="_blank">
          <img src={project.image_src} alt="" />
        </a>
      </div>
      <a
        href={project.link}
        target="_blank"
        className={styles.project_item_btn}
      >
        View
      </a>

      <div className={styles.project_text}>
        <h1>{project.title}</h1>
        <h3>{project.tech}</h3>
      </div>
      <div className={styles.github}>
        <a href={project.github_link}>
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
