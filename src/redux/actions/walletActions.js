import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addFunds,
  fetchWalletBalance,
  partialUpdateWalletBalance,
  updateWalletBalance,
  withdrawFunds,
} from "../../services/walletServices";
import { useDispatcher } from "../../utils/useDispatcher";

export const doFetchWalletBalance = createAsyncThunk(
  "wallet/doFetchWalletBalance",
  async (userId, { rejectWithValue }) => {
    try {
      const data = await fetchWalletBalance(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch wallet balance");
    }
  }
);

export const doUpdateWalletBalance = createAsyncThunk(
  "wallet/doUpdateWalletBalance",
  async (userId, amount, { rejectWithValue }) => {
    try {
      const data = await updateWalletBalance(userId, amount);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to update wallet balance"
      );
    }
  }
);

export const doPartialUpdateWalletBalance = createAsyncThunk(
  "wallet/doPartialUpdateWalletBalance",
  async (userId, amount, { rejectWithValue }) => {
    try {
      const data = await partialUpdateWalletBalance(userId, amount);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to partial update wallet"
      );
    }
  }
);

export const doAddFunds = createAsyncThunk(
  "wallet/doAddFunds",
  async (userId, amount, { rejectWithValue }) => {
    try {
      const data = await addFunds(userId, amount);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to add funds");
    }
  }
);

export const doWithdrawFunds = createAsyncThunk(
  "wallet/doWithdrawFunds",
  async (userId, amount, { rejectWithValue }) => {
    try {
      const data = await withdrawFunds(userId, amount);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to withdraw funds");
    }
  }
);

export const useFetchWalletBalance = () => useDispatcher(doFetchWalletBalance);
export const useUpdateWalletBalance = () =>
  useDispatcher(doUpdateWalletBalance);
export const usePartialUpdateWalletBalance = () =>
  useDispatcher(doPartialUpdateWalletBalance);
export const useAddFunds = () => useDispatcher(doAddFunds);
export const useWithdrawFunds = () => useDispatcher(doWithdrawFunds);
