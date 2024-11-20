import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import { getWithdrawals } from "../../services/withdrawalServices";

export const doGetWithdrawals = createAsyncThunk(
  "books/doGetWithdrawals",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getWithdrawals();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetWithdrawals = () => useDispatcher(doGetWithdrawals);
