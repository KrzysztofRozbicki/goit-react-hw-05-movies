import { fetchMovies, createTrendingURL } from '../../services/fetchMovies';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const fetchData = async () => {
    const fetchedMovies = await fetchMovies(createTrendingURL());
    setTrendingMovies(fetchedMovies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const location = useLocation();

  return (
    <ul>
      {trendingMovies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingMovies;
