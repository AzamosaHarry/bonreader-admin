import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUser,
  deleteUser,
  fetchUser,
  fetchUserMe,
  fetchUsers,
  partialUpdateUser,
  partialUpdateUserMe,
  updateUser,
  updateUserMe,
} from "../../services/userServices";

import { useDispatcher } from "../../utils/useDispatcher";

export const doFetchUser = createAsyncThunk(
  "user/doFetchUser",
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchUser(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);
export const doFetchUserMe = createAsyncThunk(
  "user/doFetchUserMe",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUserMe();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doFetchUsers = createAsyncThunk(
  "user/doFetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUsers();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doCreateUser = createAsyncThunk(
  "user/doCreateUser",
  async (firstName, lastName, { rejectWithValue }) => {
    try {
      const data = await createUser(firstName, lastName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doDeleteUser = createAsyncThunk(
  "user/doDeleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteUser(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doUpdateUser = createAsyncThunk(
  "user/doUpdateUser",
  async (id, firstName, lastName, { rejectWithValue }) => {
    try {
      const data = await updateUser(id, firstName, lastName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPartialUpdateUser = createAsyncThunk(
  "user/doPartialUpdateUser",
  async (id, firstName, lastName, { rejectWithValue }) => {
    try {
      const data = await partialUpdateUser(id, firstName, lastName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doUpdateUserMe = createAsyncThunk(
  "user/doUpdateUserMe",
  async (firstName, lastName, { rejectWithValue }) => {
    try {
      const data = await updateUserMe(firstName, lastName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPartialUpdateUserMe = createAsyncThunk(
  "user/doPartialUpdateUserMe",
  async (firstName, lastName, { rejectWithValue }) => {
    try {
      const data = await partialUpdateUserMe(firstName, lastName);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useFetchUser = () => useDispatcher(doFetchUser);
export const useFetchUserMe = () => useDispatcher(doFetchUserMe);
export const useFetchUsers = () => useDispatcher(doFetchUsers);
export const useCreateUser = () => useDispatcher(doCreateUser);
export const useDeleteUser = () => useDispatcher(doDeleteUser);
export const useUpdateUser = () => useDispatcher(doUpdateUser);
export const usePartialUpdateUser = () => useDispatcher(doPartialUpdateUser);
export const useUpdateUserMe = () => useDispatcher(doUpdateUserMe);
export const usePartialUpdateUserMe = () =>
  useDispatcher(doPartialUpdateUserMe);