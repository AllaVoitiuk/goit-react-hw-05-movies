import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FetchTrendingMovie } from '../../components/FetchTrendingMovie/FetchTrendingMovies';

const Home = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    FetchTrendingMovie()
      .then(moviesData => {
        if (moviesData !== undefined) {
          setEvents(moviesData);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1
        style={{
          margin: 10,
          color: '#010101',
        }}
      >
        Trending today
      </h1>
      <ul>
        {events.map(({ id, title }) => {
          return (
            <li
              key={id}
              onClick={() => navigate(location?.state?.from ?? `/movies/${id}`)}
            >
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default Home;
