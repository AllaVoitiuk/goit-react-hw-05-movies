import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Div, Img } from './MovieDetails.styled';

const MovieDetails = () => {
  const movie = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Button
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go back
      </Button>

      {movie && (
        <Div>
          <Img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User Score:{' ' + (movie.vote_average * 10).toFixed(0)}% </p>
            <p>
              {' '}
              <b>Overview</b>
            </p>
            <p>{movie.overview} </p>
            <p>
              {' '}
              <b>Ganres</b>
            </p>
            <p>{movie.genres.map(ganre => ganre.name + ' ')}</p>
          </div>
        </Div>
      )}
      <hr />
      <ul>
        <li>
          {
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          }
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
          {/* )} */}
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
