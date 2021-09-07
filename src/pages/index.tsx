import { useEffect, useState } from "react";
import { getSession, signIn, signOut, useSession } from "next-auth/client";

import Meta from "../components/Meta/Meta";

import FeaturedMovie from "../components/UI/FeaturedMovie";
import MovieRow from "../components/UI/MovieRow";
import Header from "../components/UI/Header";

import requests from "./api/requests";

import styles from "../styles/home.module.scss";

export default function Home({ session }) {
  const [featuredData, setFeaturedData] = useState(null);
  const [trendingList, setTrendingList] = useState([]);
  const [trendingListDay, setTrendingListDay] = useState([]);
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romance, setRomance] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await requests.getHomeList();
      let trending = list.filter((i) => i.slug === "trending");
      let trendingDay = list.filter((i) => i.slug === "trendingDay");
      let action = list.filter((i) => i.slug === "action");
      let comedy = list.filter((i) => i.slug === "comedy");
      let horror = list.filter((i) => i.slug === "horror");
      let romance = list.filter((i) => i.slug === "romance");
      setTrendingList(trending);
      setTrendingListDay(trendingDay);
      setAction(action);
      setComedy(comedy);
      setHorror(horror);
      setRomance(romance);

      // Pegando o filme em destaque (featured)
      let featured = list.filter((i) => i.slug === "featured");
      let randomChosen = Math.floor(
        Math.random() * (featured[0].items.results.length - 1)
      );
      let chosen = featured[0].items.results[randomChosen];

      let chosenInfo = await requests.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          <Meta />
          <div className={styles.container}>
            <Header
              user={session.user.name}
              avatar={session.user.image}
              email={session.user.email}
            />
            {featuredData && <FeaturedMovie item={featuredData} />}
            {trendingList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
            {trendingListDay.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
            {action.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
            {comedy.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
            {horror.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
            {romance.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />
            ))}
          </div>
        </>
      )}
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
