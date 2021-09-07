import { Rate } from "rsuite";

import styles from "../FeaturedMovie/fmovie.module.scss";
import "rsuite/dist/styles/rsuite-default.css";

export default function FeaturedMovie({ item }) {
  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={styles.featured}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className={styles.featuredVertical}>
        <div className={styles.featuredHorizontal}>
          <div className={styles.featuredName}>
            {item.title || item.name}{" "}
            <Rate
              readOnly
              size="lg"
              value={item.vote_average / 2}
              color="blue"
              className={styles.Rate}
            />
          </div>
          <div className={styles.featuredInfo}>
            <div className={styles.featuredPoints}>
              {item.vote_average} pontos
            </div>
            <div className={styles.featuredYear}>{firstDate.getFullYear()}</div>
            <div className={styles.featuredSeasons}>
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className={styles.featuredDescription}>
            {truncate(item.overview, 200)}
          </div>
          <div className={styles.featuredGenres}>
            <strong>Gêneros: </strong>
            {genres.join(", ")}
          </div>
          <div className={styles.featuredButtons}>
            <a
              href="{`/watch/${item.id}`}"
              className={styles.featuredWatchbutton}
            >
              Assistir
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
