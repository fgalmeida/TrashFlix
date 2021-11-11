import { TMDB_URL } from '../../config';
import { api } from "./apiClient";

export const getHomeList = async () => {
  return [
    {
      slug: "featured",
      title: "Em alta no mês!",
      items: await api
        .get(`/discover/tv?with_network=213&language=pt-BR&api_key=${TMDB_URL}`)
        .then((res) => res.data),
    },
    {
      slug: "trending",
      title: "Recomendados para você!",
      items: await api
        .get(`/trending/all/week?language=pt-BR&api_key=${TMDB_URL}`)
        .then((res) => res.data),
    },
    // {
    //     slug: 'Top rated',
    //     title: 'Em alta',
    //     items: await basicFetch(`/movie/top-rated?language=pt-BR&api_key=${TMDB_URL}`)

    // },
    {
      slug: "trendingDay",
      title: "Recomendados para você hoje!",
      items: await api
        .get(`/trending/all/day?language=pt-BR&api_key=${TMDB_URL}`)
        .then((res) => res.data),
    },
    {
      slug: "action",
      title: "Ação",
      items: await api
        .get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${TMDB_URL}`)
        .then((res) => res.data),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await api
        .get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${TMDB_URL}`)
        .then((res) => res.data),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await api
        .get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${TMDB_URL}`)
        .then((res) => res.data),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await api
        .get(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${TMDB_URL}`
        )
        .then((res) => res.data),
    },
    {
      slug: "documentary",
      title: "Documentário",
      items: await api
        .get(`/discover/movie?with_genres=99&language=pt-BR&api_key=${TMDB_URL}`)
        .then((res) => res.data),
    },
  ];
};

export const getMovieInfo = async (movieId, type: string) => {
  var res;
  if (movieId) {
    if (type === "movie") {
      res = await api
        .get(`/movie/${movieId}?language=pt-BR&api_key=${TMDB_URL}`)
        .then((res) => res.data);
    } else {
      res = await api
        .get(`/tv/${movieId}?language=pt-BR&api_key=${TMDB_URL}`)
        .then((res) => res.data);
    }
  }

  return res;
};
export const getSearch = async (q) => {
  const res = await api
    .get(`/search/multi?api_key=${TMDB_URL}&language=pt-BR&query=${q}`)
    .then((res) => res.data);

  return res;
};
