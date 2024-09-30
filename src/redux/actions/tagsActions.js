import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatcher } from "../../utils/useDispatcher";
import {
  createTag,
  createTagCategories,
  deleteTag,
  deleteTagCategories,
  getTagCategories,
  getTagCategoriesSingle,
  getTags,
  getTagSingle,
  patchTag,
  patchTagCategories,
  updateTag,
  updateTagCategories,
} from "../../services/tagsServices";

export const doGetTagSingle = createAsyncThunk(
  "books/doGetTagSingle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getTagSingle(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doGetTags = createAsyncThunk(
  "books/doGetTags",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTags();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doDeleteTag = createAsyncThunk(
  "books/doDeleteTag",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteTag(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doCreateTag = createAsyncThunk(
  "books/doCreateTag",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await createTag(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doUpdateTag = createAsyncThunk(
  "books/doUpdateTag",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await updateTag(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPatchTag = createAsyncThunk(
  "books/doPatchTag",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await patchTag(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

// TAG CATEGORIES

export const doGetTagCategoriesSingle = createAsyncThunk(
  "books/doGetTagCategoriesSingle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getTagCategoriesSingle(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doGetTagCategories = createAsyncThunk(
  "books/doGetTagCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTagCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doDeleteTagCategories = createAsyncThunk(
  "books/doDeleteTagCategories",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteTagCategories(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doCreateTagCategories = createAsyncThunk(
  "books/doCreateTagCategories",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await createTagCategories(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doUpdateTagCategories = createAsyncThunk(
  "books/doUpdateTagCategories",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await updateTagCategories(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPatchTagCategories = createAsyncThunk(
  "books/doPatchTagCategories",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await patchTagCategories(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetTags = () => useDispatcher(doGetTags);
export const useGetTagSingle = () => useDispatcher(doGetTagSingle);
export const useDeleteTag = () => useDispatcher(doDeleteTag);
export const useCreateTag = () => useDispatcher(doCreateTag);
export const useUpdateTag = () => useDispatcher(doUpdateTag);
export const usePatchTag = () => useDispatcher(doPatchTag);

// TAG CATEGORIES
export const useGetTagCategories = () => useDispatcher(doGetTagCategories);
export const useGetTagCategoriesSingle = () =>
  useDispatcher(doGetTagCategoriesSingle);
export const useDeleteTagCategories = () =>
  useDispatcher(doDeleteTagCategories);
export const useCreateTagCategories = () =>
  useDispatcher(doCreateTagCategories);
export const useUpdateTagCategories = () =>
  useDispatcher(doUpdateTagCategories);
export const usePatchTagCategories = () => useDispatcher(doPatchTagCategories);
