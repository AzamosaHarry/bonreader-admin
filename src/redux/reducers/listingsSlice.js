import { createSlice } from "@reduxjs/toolkit";
import {
  doCreateListings,
  doDeleteListings,
  doGetListings,
  doGetListingsSingle,
  doPatchListings,
  doUpdateListings,
} from "../actions/listingsActions";

const listingsSlice = createSlice({
  name: "listings",
  initialState: {
    listings: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetListingsState: (state) => {
      state.listings = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doGetListingsSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetListingsSingle.fulfilled, (state, { payload }) => {
        state.listings = payload;
        state.loading = false;
      })
      .addCase(doGetListingsSingle.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doGetListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetListings.fulfilled, (state, { payload }) => {
        state.listings = payload;
        state.loading = false;
      })
      .addCase(doGetListings.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doDeleteListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doDeleteListings.fulfilled, (state, { payload }) => {
        state.listings = payload;
        state.loading = false;
      })
      .addCase(doDeleteListings.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doCreateListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doCreateListings.fulfilled, (state, { payload }) => {
        state.listings = payload;
        state.loading = false;
      })
      .addCase(doCreateListings.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doUpdateListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doUpdateListings.fulfilled, (state, { payload }) => {
        state.listings = payload;
        state.loading = false;
      })
      .addCase(doUpdateListings.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doPatchListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doPatchListings.fulfilled, (state, { payload }) => {
        state.listings = payload;
        state.loading = false;
      })
      .addCase(doPatchListings.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetListingsState } = listingsSlice.actions;
export default listingsSlice.reducer;
