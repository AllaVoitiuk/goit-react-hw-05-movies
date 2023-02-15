import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
// https://api.themoviedb.org/3/movie/550?api_key=7340256a4d4aaa2ebaf1cfa503c685ed
// API_KEY 7340256a4d4aaa2ebaf1cfa503c685ed

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/movies/:id" element={<MovieDetails/>} >
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews />}/>
      </Route> 
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
