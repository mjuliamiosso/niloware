import React from 'react';
import Slider from 'react-slick';
import { LiaExternalLinkSquareAltSolid } from 'react-icons/lia';
import styles from './CardCarousel.module.scss';
import { HiOutlineExternalLink } from "react-icons/hi";

interface CardCarouselProps {
  images: string[];
  mainTag: string;
  tag: string[];
  title: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ images, mainTag, tag, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.carousel}>
      {images.map((image, index) => (
        <div key={index} className={styles.cardCarousel}>
          <div className={styles.card}>
            <img
              src={image}
              alt={`Card ${index}`}
              className={styles.image}
            />
            <HiOutlineExternalLink className={styles.icon} />
          </div>
          <div className={styles.text}>
            <div className={styles.tagContainer}>
              <p className={styles.mainTag}>{mainTag}</p>
              <p className={styles.tag}>{tag}</p>
            </div>
            <p className={styles.title}>{title}</p>
          </div>

        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
