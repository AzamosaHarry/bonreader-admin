import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import {
  createCoinOptions,
  deleteCoinOptions,
  getCoins,
} from "../../services/coinsServices";

export const doGetCoins = createAsyncThunk(
  "books/doGetCoins",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCoins();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doCreateCoinOptions = createAsyncThunk(
  "books/doCreateCoinOptions",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await createCoinOptions(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doDeleteCoinOptions = createAsyncThunk(
  "books/doDeleteCoinOptions",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteCoinOptions(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetCoins = () => useDispatcher(doGetCoins);
export const useCreateCoinOptions = () => useDispatcher(doCreateCoinOptions);
export const useDeleteCoinOptions = () => useDispatcher(doDeleteCoinOptions);
