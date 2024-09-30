// features/wallet/walletSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  doAddFunds,
  doFetchWalletBalance,
  doPartialUpdateWalletBalance,
  doWithdrawFunds,
  doUpdateWalletBalance,
} from "../actions/walletActions";

// Define initial state
const initialState = {
  balance: 0,
  loading: false,
  error: null,
};

// Create the slice
const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    resetWalletState: (state) => {
      state.balance = 0;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // add funds
      .addCase(doAddFunds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doAddFunds.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
        state.loading = false;
      })
      .addCase(doAddFunds.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // withdraw funds
      .addCase(doWithdrawFunds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doWithdrawFunds.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
        state.loading = false;
      })
      .addCase(doWithdrawFunds.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // fetch wallet balance
      .addCase(doFetchWalletBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doFetchWalletBalance.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
        state.loading = false;
      })
      .addCase(doFetchWalletBalance.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // update wallet balance
      .addCase(doUpdateWalletBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doUpdateWalletBalance.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
        state.loading = false;
      })
      .addCase(doUpdateWalletBalance.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // partial update wallet balance
      .addCase(doPartialUpdateWalletBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doPartialUpdateWalletBalance.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
        state.loading = false;
      })
      .addCase(doPartialUpdateWalletBalance.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { resetWalletState } = walletSlice.actions;
export default walletSlice.reducer;
