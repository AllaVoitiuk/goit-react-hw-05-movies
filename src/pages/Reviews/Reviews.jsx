import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../components/FetchTrendingMovie/FetchTrendingMovies';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id)
      .then(setReviews)
      .catch(error => {
        error.massage('Something went wrong!');
      });
  }, [id]);

  return (
    <div>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(({ id, content }) => (
            <li key={id}>
              <p> {content} </p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
