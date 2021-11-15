import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useState } from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../../config";
import { CardBox, Img, InitialSpace, MovieRowList } from "./MovieRow";
import { Container } from "./MovieRow";

import ScrollContainer from "react-indiana-drag-scroll";

type MovieType = {
  items: any;
  title: string;
};

export default function MovieRow({ title, items }: MovieType) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container>
      <h2>{title}</h2>
      <div className="movieRowListArea">
        <ScrollContainer vertical={false}>
          <MovieRowList>
            {items.results?.length > 0 &&
              items.results.map((item, key) => (
                <CardBox key={key}>
                  <Link href={`/movie/${item.id}`}>
                    <Img
                      fade={loaded}
                      src={`${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`}
                      alt={key}
                      onLoad={() => setLoaded(true)}
                    />
                  </Link>
                </CardBox>
              ))}
          </MovieRowList>
        </ScrollContainer>
      </div>
    </Container>
  );
}
