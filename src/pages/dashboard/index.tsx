import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import jwt from "jwt-decode";

import Meta from "../../components/atoms/Meta/Meta";

import FeaturedMovie from "../../components/molecules/FeaturedMovie";
import MovieRow from "../../components/molecules/MovieRow";
import Header from "../../components/molecules/Header";

import { GridLoader, PuffLoader, PulseLoader } from "react-spinners";
import { getHomeList, getMovieInfo } from "../../services/movies.service";
import { api } from "../../services/apiClient";
import { setupApiClient } from "services/api";
import { withSSRAuth } from "utils/withSSRAuth";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import { Container, Hero, Movies } from "styles/Dashboard";
import { parseCookies } from "nookies";

interface HomeProps {
  user: {
    email: string;
    name: string;
    last_name: string;
    profile_image: string;
  };
}

export default function Dashboard({ user }: HomeProps) {
  const [featuredData, setFeaturedData] = useState(null);
  const [trendingList, setTrendingList] = useState([]);
  const [trendingListDay, setTrendingListDay] = useState([]);
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romance, setRomance] = useState([]);

  const name = "Felipe";
  const email = "felipegoa@hotmail.com";
  const last_name = "Almeida";

  const [isLoading, setIsLoading] = useState(true);

  const [blackHeader, setBlackHeader] = useState(false);
  const [topBtn, setTopBtn] = useState(false);

  function handleScrollTop() {
    var Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;

    scroll.scrollToTop();
  }

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 700) {
        setBlackHeader(true);
        setTopBtn(true);
      } else {
        setBlackHeader(false);
        setTopBtn(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

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
      }, 1000);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Meta />
      <Container>
        <Header
          black={blackHeader}
          user={user.name + " " + user.last_name}
          avatar={url_profile_image}
          email={user.email}
          home
        />

        <Hero>
          {featuredData && (
            <FeaturedMovie data={featuredData} isLoading={isLoading} />
          )}
        </Hero>
        <Movies>
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
        </Movies>
      </Container>
    </>
  );
}

export const url_profile_image = "https://github.com/fgalmeida.png";

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const cookies = parseCookies(ctx);
  const { sub } = jwt(cookies["trashflix.auth.token"])
  const res = await apiClient.get(`/users/${sub}`);

  return {
    props: {
      user: res.data,
    },
  };
});

