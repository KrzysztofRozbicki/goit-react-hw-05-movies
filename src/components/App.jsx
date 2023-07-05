import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { TopMenu } from './TopMenu';
import './App.css';

const TrendingMovies = lazy(() =>
  import('./TrendingMovies/TrendingMovies.jsx')
);
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));
const MovieSearch = lazy(() => import('./MovieSearch/MovieSearch.jsx'));
const NotFound = lazy(() => import('./NotFound/NotFound.jsx'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<TopMenu />}>
          <Route index element={<TrendingMovies />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
