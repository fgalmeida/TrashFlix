import { useState } from "react";
import { RingLoader } from "react-spinners";
import { Rate } from "rsuite";
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../../../../config";
import { Container, Img } from "./MovieDetail";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

type MovieType = {
  data: any;
  videoKey: string;
  isLoading: boolean;
};

export default function MovieDetail({ data, videoKey, isLoading }: MovieType) {
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
              onLoad={() => setLoaded(true)}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.backdrop_path})`,
              }}
            >
              <div className="movie-box">
                <div className="left">
                  <img
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${data.poster_path}`}
                    alt="Banner"
                  />
                </div>
                <div className="right">
                  <div className="title">
                    <h1>{data.title}</h1>
                    <div className="rate-box">
                      <Rate
                        readOnly
                        size="xs"
                        value={data.vote_average / 2}
                        color="blue"
                        allowHalf={true}
                        className="rate"
                      />
                      <span>{data.vote_average / 2}</span>
                    </div>
                    <button>Assistir</button>
                  </div>
                  <div className="desc">
                    <p>{data.overview}</p>
                  </div>
                  <div className="player">
                    <iframe
                      id="player"
                      width="100%"
                      height="100%"
                      src={`http://www.youtube.com/embed/${videoKey}?enablejsapi=1&origin=http://example.com`}
                      frameBorder={0}
                    ></iframe>
                  </div>
                </div>
              </div>
            </Img>
          </>
        )}
      </Container>
    </>
  );
}
