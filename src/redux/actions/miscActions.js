import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import { getDashboardData } from "../../services/miscServices";

export const doGetDashboardData = createAsyncThunk(
  "books/doGetDashboardData",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getDashboardData();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetDashboardData = () => useDispatcher(doGetDashboardData);
