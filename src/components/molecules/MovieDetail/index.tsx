import { useState } from "react";
import { RingLoader } from "react-spinners";
import { Rate } from "rsuite";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../../../../config";
import { Container, Img } from "./MovieDetail";

type MovieType = {
  data: any;
  isLoading: boolean;
};

export default function MovieDetail({ data, isLoading }: MovieType) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Container>
        {isLoading ? (
          <>
            <div
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(180deg, rgba(9, 11, 19, 1) 0%, rgba(9, 11, 19, 0.8) 50%, rgba(9, 11, 19, 1) 100%)",
                opacity: "90%",
              }}
            >
              <RingLoader size={60} color="#fff" />
            </div>
          </>
        ) : (
          <>
            <Img
              fade={loaded}
              background={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.backdrop_path}`}
              alt={data.key}
              onLoad={() => setLoaded(true)}
            >
              <div className="movie-box">
                <div className="top">
                  <img
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${data.poster_path}`}
                    alt="Banner"
                  />
                  <div className="title">
                    <h1>{data.title || data.original_title}</h1>
                    <div className="rate-box">
                      <Rate
                        readOnly
                        size="xs"
                        value={data.vote_average / 2}
                        color="blue"
                        className="rate"
                      />
                      <span>{data.vote_average}</span>
                    </div>
                    <button>WATCH</button>
                  </div>
                  <div className="desc">
                    <p>{data.overview}</p>
                  </div>
                </div>
                <div className="bot">
                  <div className="trailer"></div>
                </div>
              </div>
            </Img>
          </>
        )}
      </Container>
    </>
  );
}
