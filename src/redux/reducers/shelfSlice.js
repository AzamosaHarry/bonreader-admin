import { createSlice } from "@reduxjs/toolkit";
import { doShelf, doAddToShelf } from "../actions/shelfActions";

const initialState = {
  reading: null,
  shelf: null,
  loading: false,
  error: null,
};

const shelfSlice = createSlice({
  name: "shelf",
  initialState,
  reducers: {
    resetShelfState: (state) => {
      state.shelf = null;
      state.reading = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // get shelf
      .addCase(doShelf.pending, (state) => {
        state.loading = true;
      })
      .addCase(doShelf.fulfilled, (state, action) => {
        state.loading = false;
        state.shelf = action.payload;
      })
      .addCase(doShelf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // add to shelf
      .addCase(doAddToShelf.pending, (state) => {
        state.loading = true;
      })
      .addCase(doAddToShelf.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doAddToShelf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetShelfState } = shelfSlice.actions;
export default shelfSlice.reducer;
