import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchSingleMovie } from '../../services/fetchMovies';
import { useState, useEffect } from 'react';
import { IMG_URL } from '../../services/constants';
import { convertGenres } from '../../services/convertGenres';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const fetchMovie = async () => {
    const fetchedMovies = await fetchSingleMovie(movieId);
    setMovie(fetchedMovies);
  };

  const location = useLocation();
  const backLinkHref = location.state?.from;

  useEffect(() => {
    fetchMovie();
  }, [movieId]);

  const { title, release_date, overview, vote_average, genres, poster_path } =
    movie;

  return (
    <div className="movie_container">
      <Link to={backLinkHref}>
        <button className="back_button">Go back</button>
      </Link>
      <div className="movie">
        <img src={`${IMG_URL}/${poster_path}`} alt={title} />
        <div className="movie_details">
          <h2>
            {title} ({release_date})
          </h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{convertGenres(genres)}</p>
        </div>
      </div>
      <div className="movie_additional">
        <Link to={`cast`}>
          <p> Cast </p>
        </Link>
        <Link to={`reviews`}>
          <p> Reviews </p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
