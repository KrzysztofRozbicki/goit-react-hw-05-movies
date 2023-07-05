import { fetchMovieCast } from '../../services/fetchMovies';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastMember } from '../CastMember/CastMember';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const fetchCast = async () => {
    const movieCast = await fetchMovieCast(movieId);
    setCast(movieCast);
  };

  useEffect(() => {
    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(person => (
        <li className="cast-member" key={person.id}>
          <CastMember person={person} />
        </li>
      ))}
    </ul>
  );
};

export default Cast;
