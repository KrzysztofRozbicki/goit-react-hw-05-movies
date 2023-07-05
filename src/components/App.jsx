import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { TopMenu } from './TopMenu';
import './App.css';

const TrendingMovies = lazy(() => import('./TrendingMovies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const MovieSearch = lazy(() => import('./MovieSearch'));

// import { TrendingMovies } from './TrendingMovies';
// import { MovieDetails } from './MovieDetails';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
// import { MovieSearch } from './MovieSearch';

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
