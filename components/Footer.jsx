import Image from "next/image";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>WELL BAKED FRESHED PIZZA EVERY TIME.</h2>
          <Image
            src="/images/footer.jpg"
            alt=""
            className={styles.footerImage}
            width="450px"
            height="300px"
          />
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Categories</h1>
          <p className={styles.text}>About Us</p>
          <p className={styles.text}>Contact Us</p>
          <p className={styles.text}>New Pizza</p>
          <p className={styles.text}>Menu</p>
          <p className={styles.text}>Chefs</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
