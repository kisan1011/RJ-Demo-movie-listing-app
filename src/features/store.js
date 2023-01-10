import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movies/movieSlice';
import showsReducer from './movies/seriesSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    shows: showsReducer,
    
  },
});
