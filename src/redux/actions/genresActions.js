import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import {
  createGenres,
  deleteGenres,
  getGenresSingle,
  patchGenres,
  updateGenres,
  getGenres,
} from "../../services/genresServices";

export const doGetGenresSingle = createAsyncThunk(
  "books/doGetGenresSingle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getGenresSingle(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doGetGenres = createAsyncThunk(
  "books/doGetGenres",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getGenres();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doDeleteGenres = createAsyncThunk(
  "books/doDeleteGenres",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteGenres(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doCreateGenres = createAsyncThunk(
  "books/doCreateGenres",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await createGenres(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doUpdateGenres = createAsyncThunk(
  "books/doUpdateGenres",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await updateGenres(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPatchGenres = createAsyncThunk(
  "books/doPatchGenres",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await patchGenres(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetGenres = () => useDispatcher(doGetGenres);
export const useGetGenresSingle = () => useDispatcher(doGetGenresSingle);
export const useDeleteGenres = () => useDispatcher(doDeleteGenres);
export const useCreateGenres = () => useDispatcher(doCreateGenres);
export const useUpdateGenres = () => useDispatcher(doUpdateGenres);
export const usePatchGenres = () => useDispatcher(doPatchGenres);
