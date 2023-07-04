import axios from 'axios';
import { URL, KEY, LANGUAGE } from './constants';

const createSearchParams = () =>
  new URLSearchParams({
    query: '',
    api_key: KEY,
    language: LANGUAGE,
    include_adult: false,
  });

export const createSearchURL = () =>
  `${URL}search/movie?${createSearchParams()}`;
export const createTrendingURL = () =>
  `${URL}trending/movie/week?${createSearchParams()}`;

export const fetchMovies = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data.results;
    if (data.length === 0) {
      throw new Error('no movies found');
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSingleMovie = async movieId => {
  try {
    const response = await axios.get(`${URL}movie/${movieId}?api_key=${KEY}`);
    const data = response.data;
    if (!data) {
      throw new Error('no movie found');
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
