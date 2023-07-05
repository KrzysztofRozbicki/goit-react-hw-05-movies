import { IMG_URL } from '../../services/constants';

export const ReviewSingle = ({ review }) => {
  const { content } = review;
  const { name, rating } = review.author_details;
  return (
    <>
      <p>Author: {name}</p>
      <p> Rating: {rating}</p>
      <p>{content}</p>
    </>
  );
};
