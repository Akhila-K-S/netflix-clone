import { API_KEY } from "./constants";

const BANNER_URL = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
const ORIGINALS_URL = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
const ACTIONS_URL = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
const ROMANTIC_URL = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
const DOCUMENTARIES_URL = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
const COMEDY_URL = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
const HORROR_URL = `/discover/movie?api_key=${API_KEY}&with_genres=27`;

//
const GET_VIDEO_KEY = (movie_id: string) =>
  `/movie/${movie_id}/videos?api_key=${API_KEY}`;

export {
  ACTIONS_URL,
  BANNER_URL,
  ORIGINALS_URL,
  ROMANTIC_URL,
  DOCUMENTARIES_URL,
  COMEDY_URL,
  HORROR_URL,
  GET_VIDEO_KEY,
};
