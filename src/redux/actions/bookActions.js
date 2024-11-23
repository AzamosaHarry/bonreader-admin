import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import {
  genre,
  filterGenre,
  ranking,
  filterNovel,
  getNovel,
  createNovel,
  getNovelChapters,
  getMyNovels,
  saveAsDraft,
  requestPublish,
  reading,
  publishChapter,
  patchChapterDraft,
  getChapterContent,
  getChapterDraft,
  deleteNovelChapter,
  updateNovelChapter,
  patchNovelChapter,
  getNovelChapter,
  createNovelChapter,
  getMyNovelChapters,
  getMyNovelChapter,
  patchNovel,
  updateNovel,
  deleteNovel,
  getMyNovel,
  getNovelsCompleted,
  getNovels,
  patchChapterContent,
  getAuthorNovels,
  assignEditor,
} from "../../services/bookServices";

export const doGetNovels = createAsyncThunk(
  "books/doGetNovels",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getNovels();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get novels");
    }
  }
);

export const doGetNovelsCompleted = createAsyncThunk(
  "books/doGetNovelsCompleted",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getNovelsCompleted();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get novels");
    }
  }
);

export const doGetNovel = createAsyncThunk(
  "books/getNovel",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getNovel(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get book");
    }
  }
);

export const doGetAuthorNovels = createAsyncThunk(
  "books/getAuthorNovels",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getAuthorNovels(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get novels");
    }
  }
);

export const doGetMyNovels = createAsyncThunk(
  "books/doGetMyNovels",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMyNovels();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get my novels");
    }
  }
);

export const doGetMyNovel = createAsyncThunk(
  "books/doGetMyNovels",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMyNovel();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get my novels");
    }
  }
);

export const doCreateNovel = createAsyncThunk(
  "books/createNovel",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createNovel(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to create novel");
    }
  }
);

export const doAssignEditor = createAsyncThunk(
  "books/assignEditor",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await assignEditor(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to assign editor");
    }
  }
);

export const doDeleteNovel = createAsyncThunk(
  "books/doDeleteNovel",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteNovel(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get book");
    }
  }
);

export const doUpdateNovel = createAsyncThunk(
  "books/doUpdateNovel",
  async (id, { rejectWithValue }) => {
    try {
      const data = await updateNovel(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get book");
    }
  }
);

export const doPatchNovel = createAsyncThunk(
  "books/doPatchNovel",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await patchNovel(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get book");
    }
  }
);

export const doGenre = createAsyncThunk(
  "books/doGenre",
  async (selectedGenre, { rejectWithValue }) => {
    try {
      const data = await genre(selectedGenre);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get genre");
    }
  }
);
export const doRanking = createAsyncThunk(
  "books/doRanking",
  async (selectedRanking, { rejectWithValue }) => {
    try {
      const data = await ranking(selectedRanking);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get ranking");
    }
  }
);

export const doFilterGenre = createAsyncThunk(
  "books/doFilterGenre",
  async (filter, { rejectWithValue }) => {
    try {
      const data = await filterGenre(filter);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to filter genre");
    }
  }
);

export const doFilterNovel = createAsyncThunk(
  "books/doFilterNovel",
  async (filter, { rejectWithValue }) => {
    try {
      const data = await filterNovel(filter);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to filter novel");
    }
  }
);

export const doReading = createAsyncThunk(
  "books/doReading",
  async (_, { rejectWithValue }) => {
    try {
      const data = await reading();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get reading");
    }
  }
);

// NOVEL CHAPTERS

export const doSaveAsDraft = createAsyncThunk(
  "books/doSaveAsDraft",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await saveAsDraft(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get save as draft");
    }
  }
);

export const doGetMyNovelChapters = createAsyncThunk(
  "books/doGetMyNovelChapters",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getMyNovelChapters(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get save as draft");
    }
  }
);
export const doGetMyNovelChapter = createAsyncThunk(
  "books/doGetMyNovelChapter",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getMyNovelChapter(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get save as draft");
    }
  }
);

export const doGetNovelChapter = createAsyncThunk(
  "books/doGetNovelChapter",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getNovelChapter(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get save as draft");
    }
  }
);

export const doCreateNovelChapter = createAsyncThunk(
  "books/doCreateNovelChapter",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await createNovelChapter(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get save as draft");
    }
  }
);

export const doPatchNovelChapter = createAsyncThunk(
  "books/doPatchNovelChapter",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await patchNovelChapter(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get save as draft");
    }
  }
);

export const doUpdateNovelChapter = createAsyncThunk(
  "books/doUpdateNovelChapter",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await updateNovelChapter(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get save as draft");
    }
  }
);
export const doDeleteNovelChapter = createAsyncThunk(
  "books/doDeleteNovelChapter",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await deleteNovelChapter(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get save as draft");
    }
  }
);

export const doGetChapterDraft = createAsyncThunk(
  "books/doGetChapterDraft",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getChapterDraft(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get chapter draft");
    }
  }
);

export const doGetChapterContent = createAsyncThunk(
  "books/doGetChapterContent",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await getChapterContent(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get chapter draft");
    }
  }
);

export const doPatchChapterDraft = createAsyncThunk(
  "books/doPatchChapterDraft",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await patchChapterDraft(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPatchChapterContent = createAsyncThunk(
  "books/doPatchChapterContent",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await patchChapterContent(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doRequestPublish = createAsyncThunk(
  "books/doRequestPublish",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await requestPublish(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPublish = createAsyncThunk(
  "books/doPublish",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await publishChapter(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doGetNovelChapters = createAsyncThunk(
  "books/doGetNovelChapters",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getNovelChapters(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get novel chapters");
    }
  }
);

export const useFilterGenre = () => useDispatcher(doFilterGenre);
export const useFilterNovel = () => useDispatcher(doFilterNovel);
export const useGenre = () => useDispatcher(doGenre);
export const useRanking = () => useDispatcher(doRanking);
export const useGetNovel = () => useDispatcher(doGetNovel);
export const useGetAuthorNovels = () => useDispatcher(doGetAuthorNovels);
export const useGetMyNovels = () => useDispatcher(doGetMyNovels);
export const useGetMyNovel = () => useDispatcher(doGetMyNovel);
export const useCreateNovel = () => useDispatcher(doCreateNovel);
export const useAssignEditor = () => useDispatcher(doAssignEditor);
export const useGetNovels = () => useDispatcher(doGetNovels);
export const useGetNovelsCompleted = () => useDispatcher(doGetNovelsCompleted);
export const useReading = () => useDispatcher(doReading);
export const useDeleteNovel = () => useDispatcher(doDeleteNovel);
export const usePatchNovel = () => useDispatcher(doPatchNovel);
export const useUpdateNovel = () => useDispatcher(doUpdateNovel);

//NOVEL CHAPTERS

export const useSaveAsDraft = () => useDispatcher(doSaveAsDraft);
export const useGetChapterDraft = () => useDispatcher(doGetChapterDraft);
export const useGetChapterContent = () => useDispatcher(doGetChapterContent);
export const usePatchChapterDraft = () => useDispatcher(doPatchChapterDraft);
export const usePatchChapterContent = () =>
  useDispatcher(doPatchChapterContent);
export const useRequestPublish = () => useDispatcher(doRequestPublish);
export const usePublish = () => useDispatcher(doPublish);
export const useGetNovelChapters = () => useDispatcher(doGetNovelChapters);
export const usePatchNovelChapter = () => useDispatcher(doPatchNovelChapter);
export const useUpdateNovelChapter = () => useDispatcher(doUpdateNovelChapter);
export const useDeleteNovelChapter = () => useDispatcher(doDeleteNovelChapter);
export const useGetNovelChapter = () => useDispatcher(doGetNovelChapter);
export const useGetMyNovelChapter = () => useDispatcher(doGetMyNovelChapter);
export const useGetMyNovelChapters = () => useDispatcher(doGetMyNovelChapters);
export const useCreateNovelChapter = () => useDispatcher(doCreateNovelChapter);
