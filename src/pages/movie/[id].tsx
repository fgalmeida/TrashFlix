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

const Movie = () => {
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
      const data = await getMovieInfo(id, "movie" || "tv");
      setData(data);
    } catch (e) {
      notifyError("Algo deu errado tente novamente!");
    } finally {
      setTimeout(function () {
        setIsLoading(false);
      }, 4000);
    }
  }

  useEffect(() => {
    if (id) loadData();
  }, [id]);

  return (
    <>
      <h1>{data?.title}</h1>
      <h1>{data?.name}</h1>
      <h1>{data?.overview}</h1>
    </>
  );
};

export default Movie;
