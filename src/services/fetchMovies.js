import axios from 'axios';
import { URL, KEY, LANGUAGE } from './constants';

const createSearchParams = query =>
  new URLSearchParams({
    query: query,
    api_key: KEY,
    language: LANGUAGE,
    include_adult: false,
  });

export const createSearchURL = query =>
  `${URL}search/movie?${createSearchParams(query)}`;
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

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `${URL}movie/${movieId}/credits?api_key=${KEY}`
    );
    const data = response.data.cast;
    if (!data) {
      throw new Error('no movie found');
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${URL}movie/${movieId}/reviews?api_key=${KEY}`
    );
    const data = response.data.results;
    if (!data) {
      throw new Error('no movie found');
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
