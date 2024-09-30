import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatcher } from "../../utils/useDispatcher";
import {
  addToShelf,
  deleteFromShelf,
  getShelfNovel,
  shelf,
} from "../../services/shelfServices";

export const doShelf = createAsyncThunk(
  "books/doShelf",
  async (_, { rejectWithValue }) => {
    try {
      const data = await shelf();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get shelf");
    }
  }
);

export const doAddToShelf = createAsyncThunk(
  "books/doAddToShelf",
  async (id, { rejectWithValue }) => {
    try {
      const data = await addToShelf(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to add to shelf");
    }
  }
);

export const doDeleteFromShelf = createAsyncThunk(
  "books/doDeleteFromShelf",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteFromShelf(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to add to shelf");
    }
  }
);

export const doGetShelfNovel = createAsyncThunk(
  "books/doGetShelfNovel",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getShelfNovel(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to add to shelf");
    }
  }
);

export const useShelf = () => useDispatcher(doShelf);
export const useAddToShelf = () => useDispatcher(doAddToShelf);
export const useDeleteFromShelf = () => useDispatcher(doDeleteFromShelf);
export const useGetShelfNovel = () => useDispatcher(doGetShelfNovel);
