import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../components/FetchTrendingMovie/FetchTrendingMovies';
import { useEffect, useState } from 'react';

const Cast = () => {
  const [casts, setCast] = useState([]);
  const { id } = useParams();
  console.log('id: ' + id);

  useEffect(() => {
    fetchMovieCast(id).then(setCast);
  }, [id]);

  return (
    <div>
      <ul>
        {casts.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            {profile_path === null ? (
              <img
                src="https://dummyimage.com/80x120/dcdcdc/000000&text=No+photo"
                alt={name}
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt={name}
                width="80"
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
