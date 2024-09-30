import { createSlice } from "@reduxjs/toolkit";
import {
  doGenre,
  doFilterGenre,
  doFilterNovel,
  doRanking,
  doGetNovel,
  doCreateNovel,
  doGetNovelChapters,
  doGetMyNovels,
  doSaveAsDraft,
  doRequestPublish,
  doGetChapterDraft,
  doGetNovels,
  doGetChapterContent,
  doPatchChapterContent,
  doUpdateNovelChapter,
  doGetNovelChapter,
  doPatchNovelChapter,
  doGetMyNovelChapters,
  doGetMyNovelChapter,
  doCreateNovelChapter,
  doPublish,
  doPatchChapterDraft,
} from "../actions/bookActions";

const initialState = {
  list: [],
  genres: [],
  genre: null,
  shelf: null,
  ranking: null,
  novel: null,
  novels: null,
  myNovels: null,
  selectedBook: null,
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    resetBookState: (state) => {
      state.books = [];
      state.bookDetails = null;
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // filter novel
      .addCase(doFilterNovel.pending, (state) => {
        state.loading = true;
      })
      .addCase(doFilterNovel.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doFilterNovel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // filter genre
      .addCase(doFilterGenre.pending, (state) => {
        state.loading = true;
      })
      .addCase(doFilterGenre.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
      })
      .addCase(doFilterGenre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get single genre
      .addCase(doGenre.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGenre.fulfilled, (state, action) => {
        state.loading = false;
        state.genre = action.payload;
      })
      .addCase(doGenre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get ranking
      .addCase(doRanking.pending, (state) => {
        state.loading = true;
      })
      .addCase(doRanking.fulfilled, (state, action) => {
        state.loading = false;
        state.ranking = action.payload;
      })
      .addCase(doRanking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get novel
      .addCase(doGetNovel.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGetNovel.fulfilled, (state, action) => {
        state.loading = false;
        state.novel = action.payload;
      })
      .addCase(doGetNovel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // create novel
      .addCase(doCreateNovel.pending, (state) => {
        state.loading = true;
      })
      .addCase(doCreateNovel.fulfilled, (state, action) => {
        state.loading = false;
        state.novel = action.payload;
      })
      .addCase(doCreateNovel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get novel chapters
      .addCase(doGetNovelChapters.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGetNovelChapters.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doGetNovelChapters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get novel chapters
      .addCase(doGetMyNovels.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGetMyNovels.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doGetMyNovels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // add to draft
      .addCase(doSaveAsDraft.pending, (state) => {
        state.loading = true;
      })
      .addCase(doSaveAsDraft.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doSaveAsDraft.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // request publish
      .addCase(doRequestPublish.pending, (state) => {
        state.loading = true;
      })
      .addCase(doRequestPublish.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doRequestPublish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // publish
      .addCase(doPublish.pending, (state) => {
        state.loading = true;
      })
      .addCase(doPublish.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doPublish.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get chapter draft
      .addCase(doGetChapterDraft.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGetChapterDraft.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doGetChapterDraft.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // patch chapter draft
      .addCase(doPatchChapterDraft.pending, (state) => {
        state.loading = true;
      })
      .addCase(doPatchChapterDraft.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doPatchChapterDraft.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get chapter content
      .addCase(doGetChapterContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGetChapterContent.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doGetChapterContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // patch chapter content
      .addCase(doPatchChapterContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(doPatchChapterContent.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(doPatchChapterContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get novels
      .addCase(doGetNovels.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGetNovels.fulfilled, (state, action) => {
        state.loading = false;
        state.novels = action.payload;
      })
      .addCase(doGetNovels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get novel chapter
      .addCase(doGetNovelChapter.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGetNovelChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.novels = action.payload;
      })
      .addCase(doGetNovelChapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // update novel chapters
      .addCase(doUpdateNovelChapter.pending, (state) => {
        state.loading = true;
      })
      .addCase(doUpdateNovelChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.novels = action.payload;
      })
      .addCase(doUpdateNovelChapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // patch novel chapters
      .addCase(doPatchNovelChapter.pending, (state) => {
        state.loading = true;
      })
      .addCase(doPatchNovelChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.novels = action.payload;
      })
      .addCase(doPatchNovelChapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get my novel chapter
      .addCase(doGetMyNovelChapter.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGetMyNovelChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.novels = action.payload;
      })
      .addCase(doGetMyNovelChapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get my novel chapters
      .addCase(doGetMyNovelChapters.pending, (state) => {
        state.loading = true;
      })
      .addCase(doGetMyNovelChapters.fulfilled, (state, action) => {
        state.loading = false;
        state.novels = action.payload;
      })
      .addCase(doGetMyNovelChapters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // create novel chapters
      .addCase(doCreateNovelChapter.pending, (state) => {
        state.loading = true;
      })
      .addCase(doCreateNovelChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.novels = action.payload;
      })
      .addCase(doCreateNovelChapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetBookState } = bookSlice.actions;
export default bookSlice.reducer;
