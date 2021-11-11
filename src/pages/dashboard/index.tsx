import { useCallback, useEffect, useState } from "react";
import { getSession, signIn, signOut, useSession } from "next-auth/client";
import { toast } from "react-toastify";

import Meta from "../../components/Meta/Meta";

import FeaturedMovie from "../../components/UI/FeaturedMovie";
import MovieRow from "../../components/UI/MovieRow";
import Header from "../../components/UI/Header";

import { GridLoader, PuffLoader, PulseLoader } from "react-spinners";
import { getHomeList, getMovieInfo } from "../../services/movies.service";
import { api } from "../../services/apiClient";

export default function Dashboard({ session }) {
  const [featuredData, setFeaturedData] = useState(null);
  const [trendingList, setTrendingList] = useState([]);
  const [trendingListDay, setTrendingListDay] = useState([]);
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romance, setRomance] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

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
    let list = await getHomeList();

    try {
      // Pegando o filme em destaque (featured)
      let featured = list.filter((i) => i.slug === "featured");
      let randomChosen = Math.floor(
        Math.random() * (featured[0].items.results.length - 1)
      );
      let chosen = featured[0].items.results[randomChosen];

      let chosenInfo = await getMovieInfo(chosen.id, "tv");
      let trending = list.filter((i) => i.slug === "trending");
      let trendingDay = list.filter((i) => i.slug === "trendingDay");
      let action = list.filter((i) => i.slug === "action");
      let comedy = list.filter((i) => i.slug === "comedy");
      let horror = list.filter((i) => i.slug === "horror");
      let romance = list.filter((i) => i.slug === "romance");
      setFeaturedData(chosenInfo);
      setTrendingList(trending);
      setTrendingListDay(trendingDay);
      setAction(action);
      setComedy(comedy);
      setHorror(horror);
      setRomance(romance);
    } catch (e) {
      notifyError("Algo deu errado tente novamente!");
    } finally {
      setTimeout(function () {
        setIsLoading(false);
      }, 4000);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Meta />
      <div className="{styles.container}">
        {session ? (
          <Header
            logout={false}
            user={session.user.name}
            avatar={session.user.image}
            email={session.user.email}
          />
        ) : (
          <Header logout={true} />
        )}

        {featuredData && (
          <FeaturedMovie
            data={featuredData}
            isLoading={isLoading}
            auth={session}
          />
        )}
        {trendingList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
            auth={session}
          />
        ))}
        {trendingListDay.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
            auth={session}
          />
        ))}
        {action.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
            auth={session}
          />
        ))}
        {comedy.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
            auth={session}
          />
        ))}
        {horror.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
            auth={session}
          />
        ))}
        {romance.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
            auth={session}
          />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
