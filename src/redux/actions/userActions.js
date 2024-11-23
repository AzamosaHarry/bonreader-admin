import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createAdmin,
  createUser,
  deleteUser,
  fetchAdmins,
  fetchAuthors,
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

export const doFetchAuthors = createAsyncThunk(
  "user/doFetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAuthors();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doFetchAdmins = createAsyncThunk(
  "user/doFetchAdmins",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAdmins();
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

export const doCreateAdmin = createAsyncThunk(
  "user/doCreateAdmin",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await createAdmin(payload);
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
  async (payload, { rejectWithValue }) => {
    try {
      const data = await updateUserMe(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPartialUpdateUserMe = createAsyncThunk(
  "user/doPartialUpdateUserMe",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await partialUpdateUserMe(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useFetchUser = () => useDispatcher(doFetchUser);
export const useGetAuthors = () => useDispatcher(doFetchAuthors);
export const useFetchUserMe = () => useDispatcher(doFetchUserMe);
export const useFetchUsers = () => useDispatcher(doFetchUsers);
export const useFetchAdmins = () => useDispatcher(doFetchAdmins);
export const useCreateUser = () => useDispatcher(doCreateUser);
export const useCreateAdmin = () => useDispatcher(doCreateAdmin);
export const useDeleteUser = () => useDispatcher(doDeleteUser);
export const useUpdateUser = () => useDispatcher(doUpdateUser);
export const usePartialUpdateUser = () => useDispatcher(doPartialUpdateUser);
export const useUpdateUserMe = () => useDispatcher(doUpdateUserMe);
export const usePartialUpdateUserMe = () =>
  useDispatcher(doPartialUpdateUserMe);
