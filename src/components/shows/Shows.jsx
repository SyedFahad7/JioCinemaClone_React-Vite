import React from 'react';
import styles from "./shows.module.css";
import Show from "../show/Show";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Shows = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className={styles.shows}>
        <h1>Hindi Movies</h1>
        <div className={styles.showsParent}>
          <Slider {...settings}>
            <Show />
            <Show />
            <Show />
            <Show />
            <Show />
            <Show />
            <Show />
            <Show />
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Shows;