import React, { useEffect } from 'react';
import MovieListing from '../../components/MovieListing/MovieListing';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import { fetchAsyncShows } from '../../features/movies/seriesSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const movieText = 'Harry';
    const showText = 'Friends';
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;
