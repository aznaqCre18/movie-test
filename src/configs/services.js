export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const API_KEY = '2fccde01a371b106b09a241d6d1d5b49';

const BASE_URL = 'https://api.themoviedb.org/3';

export const SERVICES = {
  //GENRES
  GET_ALL_GENRES: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,

  //MOVIE LIST
  GET_MOVIE_LIST: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,

  //MOVIE DETAIl
  GET_MOVIE_DETAIL: `${BASE_URL}/movie`,
};