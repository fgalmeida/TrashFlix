export const API_URL = "https://fakestoreapi.com/auth/login";

export const TMDB_URL = "https://api.themoviedb.org/3";

export const API_KEY =
  process.env.REACT_APP_API_KEY || "6348a726f8b6caab7659f60e2955d519";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const GITHUB_ID = "Iv1.97b3c02409f5794b";
const GITHUB_SECRET = "239c70ced67f9efa11157a9e7107afa73449ca77";

const DISCORD_CLIENT_ID = "869039109191131207";
const DISCORD_CLIENT_SECRET = "3eYvm_e2Jxwokxpa7Lb7IRIrl0YcNlBN";

// sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = "w1280";

// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE = "w500";
export const PHOTO_SIZE = "w342";
export const TINY_POSTER_SIZE = "w185";

export const MOVIES = ["popular", "top_rated", "now_playing"];
export const TV = ["popular", "top_rated", "on_the_air", "airing_today"];

export const NETWORKS = [
  { id: 80, name: "Adult Swim" },
  { id: 49, name: "HBO" },
  { id: 56, name: "Cartoon Network" },
  { id: 174, name: "AMC" },
  { id: 54, name: "Disney" },
  { id: 19, name: "FOX" },
];

export const COMPANIES = [
  { id: 521, name: "DreamWorks Animation" },
  { id: 174, name: "Warner Bros. Pictures" },
  { id: 2, name: "Walt Disney Pictures" },
  { id: 33, name: "Universal Pictures" },
  { id: 25, name: "20th Century Fox" },
];
