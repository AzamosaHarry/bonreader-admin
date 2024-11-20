import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import { getCoins } from "../../services/coinsServices";

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

export const useGetCoins = () => useDispatcher(doGetCoins);
