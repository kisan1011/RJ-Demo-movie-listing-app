import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
  return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  selectMovieOrShow: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeMovieOrShowDetail: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched successfully');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected');
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeMovieOrShowDetail } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
