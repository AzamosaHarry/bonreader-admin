import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import { getContracts } from "../../services/contractServices";

export const doGetContracts = createAsyncThunk(
  "books/doGetContracts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContracts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetContracts = () => useDispatcher(doGetContracts);
