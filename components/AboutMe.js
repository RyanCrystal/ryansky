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
            <div>
              <p>
                With great passion in web development,I&apos;ve been teaching
                myself all along.
              </p>
              <br />
              <p>Some Technologies:</p>
              <div>
                <p>
                  Front end:{" "}
                  <strong>JavaScript (VueJS, ReactJS), SCSS ...</strong>
                </p>
              </div>
              <div>
                <p>
                  Back end:{" "}
                  <strong>PHP & MySQL, NodeJS & ExpressJS ... </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
