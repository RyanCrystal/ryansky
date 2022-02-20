import styles from "../styles/MainSection.module.css";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "react-scroll/modules/components/Link";

config.autoAddCss = false; /* eslint-disable import/first */
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
          <span style={{ width: "21px" }}>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
    </>
  );
}
