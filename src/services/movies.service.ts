import axios from "axios";
import { API_KEY, TMDB_URL } from "../../config";
import { api } from "./apiClient";

export const moviesApi = axios.create({
  baseURL: `${TMDB_URL}`,
});

export const getHomeList = async () => {
  return [
    {
      slug: "featured",
      title: "Em alta no mês!",
      items: await moviesApi
        .get(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        .then((res) => res.data),
    },
    {
      slug: "trending",
      title: "Recomendados para você!",
      items: await moviesApi
        .get(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        .then((res) => res.data),
    },
    {
      slug: "trendingDay",
      title: "Recomendados para você hoje!",
      items: await moviesApi
        .get(`/trending/all/day?language=pt-BR&api_key=${API_KEY}`)
        .then((res) => res.data),
    },
    {
      slug: "action",
      title: "Ação",
      items: await moviesApi
        .get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        .then((res) => res.data),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await moviesApi
        .get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        .then((res) => res.data),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await moviesApi
        .get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        .then((res) => res.data),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await moviesApi
        .get(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        )
        .then((res) => res.data),
    },
    {
      slug: "documentary",
      title: "Documentário",
      items: await moviesApi
        .get(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        .then((res) => res.data),
    },
  ];
};

export const getMovieInfo = async (movieId, type: string) => {
  const endpoint = `/${type}/${movieId}?api_key=${API_KEY}&language=pt-BR&append_to_response=videos`;
  const res = await moviesApi.get(endpoint).then((res) => res.data);
  return res;
};

export const getSearch = async (q) => {
  const res = await moviesApi
    .get(`/search/multi?api_key=${API_KEY}&language=pt-BR&query=${q}`)
    .then((res) => res.data);

  return res;
};