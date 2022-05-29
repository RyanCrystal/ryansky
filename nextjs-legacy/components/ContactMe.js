import Link from "next/link";
import styles from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <>
      <div className={styles.contact_container}>
        <h1>Contact</h1>
        <p>Want to reach me?</p>
        <form className={styles.contact_form} action="">
          <input type="text" placeholder="name" />
          <br />
          <input type="email" placeholder="email" />
          <br />
          <textarea rows="8" placeholder="Messages..."></textarea>
          <br />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </>
  );
};

export default ContactMe;
