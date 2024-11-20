import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import { getRoles } from "../../services/rolePermissionServices";

export const doGetRoles = createAsyncThunk(
  "books/doGetRoles",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getRoles();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetRoles = () => useDispatcher(doGetRoles);
