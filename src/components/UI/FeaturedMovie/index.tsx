import { Rate } from "rsuite";

import styles from "../FeaturedMovie/fmovie.module.scss";
import "rsuite/dist/styles/rsuite-default.css";
import { PuffLoader, RingLoader } from "react-spinners";

type FeaturedType = {
  data: any;
  isLoading: boolean;
  auth: boolean;
};

export default function FeaturedMovie({ data, isLoading, auth }: FeaturedType) {
  let firstDate = new Date(data.first_air_date);

  let genres = [];
  for (let i in data.genres) {
    genres.push(data.genres[i].name);
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header
        className={styles.featured}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        }}
      >
        {isLoading ? (
          <>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#1e1f22",
                opacity: "90%",
              }}
            >
              <RingLoader size={60} color="#333" />
            </div>
          </>
        ) : (
          <>
            <div className={styles.featuredVertical}>
              <div className={styles.featuredHorizontal}>
                <div className={styles.featuredName}>
                  {data.title || data.name}{" "}
                  <Rate
                    readOnly
                    size="lg"
                    value={data.vote_average / 2}
                    color="blue"
                    className={styles.Rate}
                  />
                </div>
                <div className={styles.featuredInfo}>
                  <div className={styles.featuredPoints}>
                    {data.vote_average} pontos
                  </div>
                  <div className={styles.featuredYear}>
                    {firstDate.getFullYear()}
                  </div>
                  <div className={styles.featuredSeasons}>
                    {data.number_of_seasons} Temporada
                    {data.number_of_seasons !== 1 ? "s" : ""}
                  </div>
                </div>
                <div className={styles.featuredDescription}>
                  {truncate(data.overview, 200)}
                </div>
                <div className={styles.featuredGenres}>
                  <strong>Gêneros: </strong>
                  {genres.join(", ")}
                </div>
                <div className={styles.featuredButtons}>
                  {auth ? (
                    <a
                      href={`/movie/${data.id}`}
                      className={styles.featuredWatchbutton}
                    >
                      Assistir
                    </a>
                  ) : (
                    <a href={`/auth/signin`} className={styles.featuredWatchbutton}>
                      Assistir
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
