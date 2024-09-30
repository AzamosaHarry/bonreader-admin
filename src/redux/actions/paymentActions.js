import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserPayments,
  getUserPaymentsSingle,
  getUsersPayments,
  getUsersPaymentsSingle,
  partialUpdateUsersPaymentsSingle,
  updateUsersPaymentsSingle,
  verifyPayments,
} from "../../services/paymentServices";
import { useDispatcher } from "../../utils/useDispatcher";

export const doGetUsersPayments = createAsyncThunk(
  "payment/doGetUsersPayments",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUsersPayments();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doGetUserPayments = createAsyncThunk(
  "payment/doGetUserPayments",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUserPayments();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doGetUsersPaymentsSingle = createAsyncThunk(
  "payment/doGetUsersPaymentsSingle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getUsersPaymentsSingle(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doGetUserPaymentsSingle = createAsyncThunk(
  "payment/doGetUserPaymentsSingle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getUserPaymentsSingle(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doUpdateUsersPaymentsSingle = createAsyncThunk(
  "payment/doUpdateUsersPaymentsSingle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await updateUsersPaymentsSingle(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doPartialUpdateUsersPaymentsSingle = createAsyncThunk(
  "payment/doPartialUpdateUsersPaymentsSingle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await partialUpdateUsersPaymentsSingle(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const doVerifyPayments = createAsyncThunk(
  "payment/doVerifyPayments",
  async (txn_id, { rejectWithValue }) => {
    try {
      const data = await verifyPayments(txn_id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetUsersPayments = () => useDispatcher(doGetUsersPayments);
export const useGetUserPayments = () => useDispatcher(doGetUserPayments);
export const useGetUsersPaymentsSingle = () =>
  useDispatcher(doGetUsersPaymentsSingle);
export const useGetUserPaymentsSingle = () =>
  useDispatcher(doGetUserPaymentsSingle);
export const useUpdateUsersPaymentsSingle = () =>
  useDispatcher(doUpdateUsersPaymentsSingle);
export const usePartialUpdateUsersPaymentsSingle = () =>
  useDispatcher(doPartialUpdateUsersPaymentsSingle);
export const useVerifyPayments = () => useDispatcher(doVerifyPayments);
