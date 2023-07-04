import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TrendingMovies } from './TrendingMovies';
import { MovieDetails } from './MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TrendingMovies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
