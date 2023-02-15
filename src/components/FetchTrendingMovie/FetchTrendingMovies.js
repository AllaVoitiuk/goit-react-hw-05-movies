import axios from 'axios';

//const KEY = '7340256a4d4aaa2ebaf1cfa503c685ed';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const FetchTrendingMovie = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=7340256a4d4aaa2ebaf1cfa503c685ed`
  );

  let newMovies;
  newMovies = response.data.results.map(movie => {
    const { id, title } = movie;
    //console.log('movie: ', movie);
    return { id, title };
  });

  return newMovies;
};

export const FetchMovies = async (searchQuery = '') => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=7340256a4d4aaa2ebaf1cfa503c685ed&language=en-US&page=1&query=${searchQuery}&include_adult=false`
  );

  let movies;
  movies = response.data.results;
  return movies;
};

export async function fetchMoviById(id) {
  
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7340256a4d4aaa2ebaf1cfa503c685ed&language=en-US`
  );

  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7340256a4d4aaa2ebaf1cfa503c685ed&language=en-US`
  );
  
  return response.data.cast.map(cast => {
    const { id, character, name, profile_path } = cast;
    return { id, character, name, profile_path };
  });
}

export async function fetchMovieReviews(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7340256a4d4aaa2ebaf1cfa503c685ed&language=en-US&page=1`
  );
  
  return response.data.results.map(reviews => {
    const { id, content } = reviews;
    return { id, content };
  });
}
