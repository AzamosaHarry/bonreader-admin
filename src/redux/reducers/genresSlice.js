import { createSlice } from "@reduxjs/toolkit";
import {
  doCreateGenres,
  doDeleteGenres,
  doGetGenres,
  doGetGenresSingle,
  doPatchGenres,
  doUpdateGenres,
} from "../actions/genresActions";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetGenresState: (state) => {
      state.genres = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doGetGenresSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetGenresSingle.fulfilled, (state, { payload }) => {
        state.genres = payload;
        state.loading = false;
      })
      .addCase(doGetGenresSingle.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doGetGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetGenres.fulfilled, (state, { payload }) => {
        state.genres = payload;
        state.loading = false;
      })
      .addCase(doGetGenres.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doDeleteGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doDeleteGenres.fulfilled, (state, { payload }) => {
        state.genres = payload;
        state.loading = false;
      })
      .addCase(doDeleteGenres.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doCreateGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doCreateGenres.fulfilled, (state, { payload }) => {
        state.genres = payload;
        state.loading = false;
      })
      .addCase(doCreateGenres.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doUpdateGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doUpdateGenres.fulfilled, (state, { payload }) => {
        state.genres = payload;
        state.loading = false;
      })
      .addCase(doUpdateGenres.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doPatchGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doPatchGenres.fulfilled, (state, { payload }) => {
        state.genres = payload;
        state.loading = false;
      })
      .addCase(doPatchGenres.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetGenresState } = genresSlice.actions;
export default genresSlice.reducer;
