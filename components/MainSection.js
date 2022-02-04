import styles from "../styles/MainSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "react-scroll/modules/components/Link";

export function MainSection() {
  return (
    <>
      <h1 className={styles["lg-heading"]}>
        Ryan <span className="text-secondary">Wang</span>
      </h1>

      <h2 className={styles["sm-heading"]}> Web Developer </h2>

      <div className={styles["main__arrow"]}>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-56}
          duration={500}
        >
          View My Work&nbsp;
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
    </>
  );
}
