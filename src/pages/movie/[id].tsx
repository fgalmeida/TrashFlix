import Header from "components/molecules/Header";
import MovieDetail from "components/molecules/MovieDetail";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMovieInfo } from "../../services/movies.service";

type MovieType = {
  title: string;
  name: string;
  backdrop_path: string | null;
  poster_path: string;
  overview: string;
  vote_average: number;
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
        data = await getMovieInfo(id, "movie");
      } catch (e) {
        data = await getMovieInfo(id, "tv");
      }
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
      <Header
        black={true}
        // user={name + " " + last_name}
        // avatar={url_profile_image}
        // email={email}
        home
      />
      <MovieDetail data={data} isLoading={isLoading} />
    </>
  );
};

export default Movie;

// export const getServerSideProps = withSSRAuth(async (ctx) => {
//   const apiClient = setupApiClient(ctx);

//   const res = await apiClient.get("/users/me");

//   return {
//     props: {
//       user: res.data.body,
//     },
//   };
// });
