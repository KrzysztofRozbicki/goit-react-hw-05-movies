import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { TopMenu } from './components/TopMenu';
import { Loader } from './components/Loader/Loader.jsx';
import './App.css';

const TrendingMovies = lazy(() =>
  import('./pages/TrendingMovies/TrendingMovies.jsx')
);
const MovieDetails = lazy(() =>
  import('./pages/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('./components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('./components/Reviews/Reviews.jsx'));
const MovieSearch = lazy(() => import('./pages/MovieSearch/MovieSearch.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
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
