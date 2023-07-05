import { fetchMovieReviews } from '../../services/fetchMovies';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewSingle } from '../ReviewSingle';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const fetchReviews = async () => {
    const movieReviews = await fetchMovieReviews(movieId);
    setReviews(movieReviews);
  };

  useEffect(() => {
    fetchReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li className="review-single" key={review.id}>
            <ReviewSingle review={review} />
          </li>
        ))
      ) : (
        <p> There are no reviews for this movie </p>
      )}
    </ul>
  );
};

export default Reviews;
