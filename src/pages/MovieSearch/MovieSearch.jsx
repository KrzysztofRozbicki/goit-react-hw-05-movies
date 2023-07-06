import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies, createSearchURL } from '../../services/fetchMovies';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  const fetchSearchedMovies = async () => {
    const fetchedMovies = await fetchMovies(createSearchURL(movieName));
    setMovies(fetchedMovies);
  };

  const updateQuery = event => {
    event.preventDefault();
    const querySearch = event.target.elements.input.value;
    setSearchParams({ query: querySearch });
    event.target.reset();
  };

  const location = useLocation();

  useEffect(() => {
    if (movieName !== '') {
      fetchSearchedMovies();
    }
  }, [movieName]);

  return (
    <>
      <form onSubmit={updateQuery}>
        <input type="text" name="input" className="movie-search"></input>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieSearch;
