import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TrendingMovies } from './TrendingMovies';
import { MovieDetails } from './MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { TopMenu } from './TopMenu';
import { MovieSearch } from './MovieSearch';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TopMenu />}>
        <Route index element={<TrendingMovies />} />
        <Route path="/movies" element={<MovieSearch />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
