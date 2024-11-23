import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import {
  getRolePermissions,
  getRoles,
} from "../../services/rolePermissionServices";

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

export const doGetRolePermissions = createAsyncThunk(
  "books/doGetRolePermissions",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getRolePermissions(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetRoles = () => useDispatcher(doGetRoles);
export const useGetRolePermissions = () => useDispatcher(doGetRolePermissions);
