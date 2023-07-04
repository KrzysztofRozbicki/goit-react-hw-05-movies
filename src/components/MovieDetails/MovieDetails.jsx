import { useParams } from 'react-router-dom';
import { fetchSingleMovie } from '../../services/fetchMovies';
import { useState, useEffect } from 'react';
import { IMG_URL } from '../../services/constants';
import { convertGenres } from '../../services/convertGenres';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const fetchMovie = async () => {
    const fetchedMovies = await fetchSingleMovie(movieId);
    setMovie(fetchedMovies);
    console.log(movie);
  };

  useEffect(() => {
    fetchMovie();
  }, [movieId]);
  const { title, release_date, overview, vote_average, genres, poster_path } =
    movie;

  return (
    <div>
      <img src={`${IMG_URL}/${poster_path}`} alt={title} />
      <h2>
        {title} ({release_date})
      </h2>
      <p>User score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{convertGenres(genres)}</p>
    </div>
  );
};
