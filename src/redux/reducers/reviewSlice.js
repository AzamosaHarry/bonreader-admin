import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetCommentState: (state) => {
      state.comments = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadComments.fulfilled, (state, { payload }) => {
        state.comments = payload;
        state.loading = false;
      })
      .addCase(loadComments.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(postComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postComment.fulfilled, (state, { payload }) => {
        state.comments.push(payload);
        state.loading = false;
      })
      .addCase(postComment.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetCommentState } = commentSlice.actions;
export default commentSlice.reducer;
