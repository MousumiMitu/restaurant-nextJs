import styles from "../styles/Featured.module.css";
import Image from "next/image";
import Slider from "react-slick";

const Featured = () => {
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Featured;
