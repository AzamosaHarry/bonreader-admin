import { createSlice } from "@reduxjs/toolkit";
import {
  doCreateTag,
  doCreateTagCategories,
  doDeleteTag,
  doDeleteTagCategories,
  doGetTagCategories,
  doGetTagCategoriesSingle,
  doGetTags,
  doGetTagSingle,
  doPatchTag,
  doPatchTagCategories,
  doUpdateTag,
  doUpdateTagCategories,
} from "../actions/tagsActions";

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    tags: null,
    tagCategories: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetTagsState: (state) => {
      state.tags = null;
      state.tagCategories = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doGetTagSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetTagSingle.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doGetTagSingle.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doGetTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetTags.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doGetTags.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doDeleteTag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doDeleteTag.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doDeleteTag.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doCreateTag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doCreateTag.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doCreateTag.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doUpdateTag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doUpdateTag.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doUpdateTag.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doPatchTag.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doPatchTag.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doPatchTag.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // TAG CATEGORIES

      .addCase(doGetTagCategoriesSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetTagCategoriesSingle.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doGetTagCategoriesSingle.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doGetTagCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetTagCategories.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doGetTagCategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doDeleteTagCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doDeleteTagCategories.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doDeleteTagCategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doCreateTagCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doCreateTagCategories.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doCreateTagCategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doUpdateTagCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doUpdateTagCategories.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doUpdateTagCategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doPatchTagCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doPatchTagCategories.fulfilled, (state, { payload }) => {
        state.tags = payload;
        state.loading = false;
      })
      .addCase(doPatchTagCategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetTagsState } = tagsSlice.actions;
export default tagsSlice.reducer;
