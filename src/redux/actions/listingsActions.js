import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import {
  createListings,
  deleteListings,
  getListings,
  getListingsSingle,
  patchListings,
  updateListings,
} from "../../services/listingServices";

export const doGetListingsSingle = createAsyncThunk(
  "books/doGetListingsSingle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getListingsSingle(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doGetListings = createAsyncThunk(
  "books/doGetListings",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getListings();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doDeleteListings = createAsyncThunk(
  "books/doDeleteListings",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteListings(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doCreateListings = createAsyncThunk(
  "books/doCreateListings",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await createListings(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doUpdateListings = createAsyncThunk(
  "books/doUpdateListings",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await updateListings(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPatchListings = createAsyncThunk(
  "books/doPatchListings",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await patchListings(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetListings = () => useDispatcher(doGetListings);
export const useGetListingsSingle = () => useDispatcher(doGetListingsSingle);
export const useDeleteListings = () => useDispatcher(doDeleteListings);
export const useCreateListings = () => useDispatcher(doCreateListings);
export const useUpdateListings = () => useDispatcher(doUpdateListings);
export const usePatchListings = () => useDispatcher(doPatchListings);
