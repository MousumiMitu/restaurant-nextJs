import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image
          src="/images/arrowl.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className={styles.wrapper}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image
          src="/images/arrowr.png"
          layout="fill"
          alt=""
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
