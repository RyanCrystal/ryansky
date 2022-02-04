import Link from "next/link";
import styles from "../styles/AboutMe.module.css";
const AboutMe = () => {
  return (
    <>
      <h1>About Me</h1>
      <div className={styles.about_content}>
        <div className={styles.about_content_left}>
          <div className={styles.img_container}></div>
          <div className={styles.intro_text}>
            <p>
              With great passion in web development,I&apos;ve been teaching
              myself all along.
              <br />
              My focus right now is <strong>JavaScript</strong> and
              <strong> PHP</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
