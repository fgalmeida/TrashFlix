import Link from "next/link";
import Slider from "react-slick";

import styles from "../MovieRow/movierow.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MovieRow({ title, items }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7.5,
    slidesToScroll: 3,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>
      <div className={styles.movieRowListArea}>
        <Slider {...settings} className={styles.movieRowList}>
          {items.results?.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className={styles.cardBox}>
                <Link href={`/movie/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={key}
                  />
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
