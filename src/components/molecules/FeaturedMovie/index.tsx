import { Rate } from "rsuite";

import styles from "../FeaturedMovie/fmovie.module.scss";
import "rsuite/dist/styles/rsuite-default.css";
import { PuffLoader, RingLoader } from "react-spinners";
import { Container } from "./FeaturedMovie";

type FeaturedType = {
  data: any;
  isLoading: boolean;
};

export default function FeaturedMovie({ data, isLoading }: FeaturedType) {
  let firstDate = new Date(data.first_air_date)

  let genres = [];
  for (let i in data.genres) {
    genres.push(data.genres[i].name);
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <Container>
        <header
          className="featured"
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
                  background:
                    "linear-gradient(180deg, rgba(9, 11, 19, 1) 0%, rgba(9, 11, 19, 0.8) 50%, rgba(9, 11, 19, 1) 100%)",
                  opacity: "90%",
                }}
              >
                <RingLoader size={60} color="#090b13" />
              </div>
            </>
          ) : (
            <>
              <div className="featuredVertical">
                <div className="featuredHorizontal">
                  <div className="featuredName">
                    {data.title || data.name}{" "}
                    <Rate
                      readOnly
                      size="lg"
                      value={data.vote_average / 2}
                      color="blue"
                      className="Rate"
                      allowHalf={true}
                    />
                  </div>
                  <div className="featuredInfo">
                    <div className="featuredPoints">
                      {data.vote_average / 2} pontos
                    </div>
                    <div className="featuredYear">
                      {firstDate.getFullYear()}
                    </div>
                    <div className="featuredSeasons">
                      {data.number_of_seasons} Temporada
                      {data.number_of_seasons !== 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="featuredDescription">
                    {truncate(data.overview, 200)}
                  </div>
                  <div className="featuredGenres">
                    <strong>Gêneros: </strong>
                    {genres.join(", ")}
                  </div>
                  <div className="featuredButtons">
                    <a
                      href={`/movie/${data.id}`}
                      className="featuredWatchbutton"
                    >
                      Assistir
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </header>
      </Container>
    </>
  );
}
