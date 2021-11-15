import Header from "components/molecules/Header";
import MovieDetail from "components/molecules/MovieDetail";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { url_profile_image } from "pages/dashboard";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setupApiClient } from "services/api";
import { withSSRAuth } from "utils/withSSRAuth";
import { getMovieInfo } from "../../services/movies.service";
import Head from "next/head";
import jwt from "jwt-decode";

type ArrayType = {
  results: [
    id: string,
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    official: true,
    published_at: string,
    site: string,
    size: number,
    type: string
  ];
};

type MovieType = {
  title: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  videos: Array<ArrayType>;
};

interface HomeProps {
  user: {
    email: string;
    name: string;
    last_name: string;
    profile_image: string;
  };
}

const Movie = ({ user }: HomeProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<MovieType>();
  const [trailer, setTrailer] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const notifySucces = useCallback((message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  const notifyError = useCallback((message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  async function loadData() {
    try {
      var data;
      try {
        data = await getMovieInfo(id, "tv");
      } catch (e) {
        data = await getMovieInfo(id, "movie");
      }

      console.log(data);
      setTrailer(data.videos.results[0].key);
      setData(data);
    } catch (e) {
      notifyError("Algo deu errado tente novamente!");
    } finally {
      setTimeout(function () {
        setIsLoading(false);
      }, 1000);
    }
  }

  useEffect(() => {
    if (id) loadData();
  }, [id]);

  return (
    <>
      <Head>
        <title>TrashFlix | Filmes </title>
      </Head>
      <Header
        black={true}
        user={user.name}
        avatar={url_profile_image}
        email={user.email}
        home
      />
      <MovieDetail data={data} videoKey={trailer} isLoading={isLoading} />
    </>
  );
};

export default Movie;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const cookies = parseCookies(ctx);
  const { sub } = jwt(cookies["trashflix.auth.token"]);
  const res = await apiClient.get(`/users/${sub}`);

  return {
    props: {
      user: res.data,
    },
  };
});
