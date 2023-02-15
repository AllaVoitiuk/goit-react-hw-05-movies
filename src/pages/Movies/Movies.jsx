import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FetchMovies } from '../../components/FetchTrendingMovie/FetchTrendingMovies';
import { useSearchParams } from 'react-router-dom';

//https: //api.themoviedb.org/3/search/movie?api_key=7340256a4d4aaa2ebaf1cfa503c685ed&language=en-US&page=1&include_adult=false

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    FetchMovies(searchQuery)
      .then(setEvents)
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const { value } = evt.target.elements.search;
    setEvents([]);
    setSearchParams({ search: value });
    
    form.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: 10,
        }}
      >
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies name"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      <ul>
        {events &&
          events.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
}

export default Movies;
