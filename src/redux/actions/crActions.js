import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import {
  createCR,
  deleteCR,
  getCRs,
  getCRSingle,
  patchCR,
  updateCR,
} from "../../services/crServices";

export const doGetCRSingle = createAsyncThunk(
  "books/doGetCRSingle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getCRSingle(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doGetCRs = createAsyncThunk(
  "books/doGetCRs",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCRs();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doDeleteCR = createAsyncThunk(
  "books/doDeleteCR",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteCR(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doCreateCR = createAsyncThunk(
  "books/doCreateCR",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await createCR(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doUpdateCR = createAsyncThunk(
  "books/doUpdateCR",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await updateCR(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPatchCR = createAsyncThunk(
  "books/doPatchCR",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await patchCR(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetCRs = () => useDispatcher(doGetCRs);
export const useGetCRSingle = () => useDispatcher(doGetCRSingle);
export const useDeleteCR = () => useDispatcher(doDeleteCR);
export const useCreateCR = () => useDispatcher(doCreateCR);
export const useUpdateCR = () => useDispatcher(doUpdateCR);
export const usePatchCR = () => useDispatcher(doPatchCR);
