import React from 'react';
import Slider from 'react-slick';
import { LiaExternalLinkSquareAltSolid } from 'react-icons/lia';
import styles from './CardCarousel.module.scss';

interface CardCarouselProps {
  images: string[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
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
        <div key={index} className={styles.card}>
          <img src={image} alt={`Card ${index}`} className={styles.image} />
          <LiaExternalLinkSquareAltSolid className={styles.icon} />
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
