import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
  return response.data;
});

const initialState = {
  shows: {},
};

const seriesSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    addShows: (state, { payload }) => {
      state.shows = payload;
    },
  },
  extraReducers: {
    [fetchAsyncShows.pending]: () => {
      console.log('Pending show Request');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('fulfilled show Request');
      return { ...state, shows: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log('rejected show Request');
    },
  },
});

export const { addShows } = seriesSlice.actions;
export const getAllShows = (state) => state.shows.shows;
export default seriesSlice.reducer;
