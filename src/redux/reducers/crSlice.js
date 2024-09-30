import { createSlice } from "@reduxjs/toolkit";
import {
  doCreateCR,
  doDeleteCR,
  doGetCRs,
  doGetCRSingle,
  doPatchCR,
  doUpdateCR,
} from "../actions/crActions";

const crSlice = createSlice({
  name: "cr",
  initialState: {
    cr: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetCRState: (state) => {
      state.cr = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doGetCRSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetCRSingle.fulfilled, (state, { payload }) => {
        state.cr = payload;
        state.loading = false;
      })
      .addCase(doGetCRSingle.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doGetCRs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetCRs.fulfilled, (state, { payload }) => {
        state.cr = payload;
        state.loading = false;
      })
      .addCase(doGetCRs.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doDeleteCR.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doDeleteCR.fulfilled, (state, { payload }) => {
        state.cr = payload;
        state.loading = false;
      })
      .addCase(doDeleteCR.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doCreateCR.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doCreateCR.fulfilled, (state, { payload }) => {
        state.cr = payload;
        state.loading = false;
      })
      .addCase(doCreateCR.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doUpdateCR.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doUpdateCR.fulfilled, (state, { payload }) => {
        state.cr = payload;
        state.loading = false;
      })
      .addCase(doUpdateCR.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doPatchCR.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doPatchCR.fulfilled, (state, { payload }) => {
        state.cr = payload;
        state.loading = false;
      })
      .addCase(doPatchCR.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetCRState } = crSlice.actions;
export default crSlice.reducer;
