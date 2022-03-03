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
                With 3 years of working experience in web development, I feel
                happy to be a web develper to solve problems and benefit the
                users. In my spare time, I learn online (udemy, youtube..) to
                expand my knowledge and view.
              </p>
              <br />
              <p>Some Technologies:</p>
              <div>
                <p>
                  Front end:{" "}
                  <strong>JavaScript (VueJS, ReactJS, jQuery), SCSS ...</strong>
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
