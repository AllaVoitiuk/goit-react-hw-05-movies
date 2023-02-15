import { fetchMoviById } from '../components/FetchTrendingMovie/FetchTrendingMovies';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useFetchEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchMoviById(id).then(setEvent);
  }, [id]);

  return event;
};
