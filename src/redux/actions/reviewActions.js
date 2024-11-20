import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import { getReviews } from "../../services/reviewServices";

export const doGetReviews = createAsyncThunk(
  "books/doGetReviews",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getReviews();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetReviews = () => useDispatcher(doGetReviews);
