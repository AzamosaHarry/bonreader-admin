import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import { getEp } from "../../services/epServices";

export const doGetEp = createAsyncThunk(
  "books/doGetEp",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getEp();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetEp = () => useDispatcher(doGetEp);
