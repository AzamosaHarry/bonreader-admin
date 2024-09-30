import { createSlice } from "@reduxjs/toolkit";
import {
  doGetUserPayments,
  doGetUserPaymentsSingle,
  doGetUsersPayments,
  doGetUsersPaymentsSingle,
  doPartialUpdateUsersPaymentsSingle,
  doUpdateUsersPaymentsSingle,
  doVerifyPayments,
} from "../actions/paymentActions";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetPaymentState: (state) => {
      state.payment = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doGetUserPayments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetUserPayments.fulfilled, (state, { payload }) => {
        state.payment = payload;
        state.loading = false;
      })
      .addCase(doGetUserPayments.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doGetUsersPayments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetUsersPayments.fulfilled, (state, { payload }) => {
        state.payment = payload;
        state.loading = false;
      })
      .addCase(doGetUsersPayments.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doGetUsersPaymentsSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetUsersPaymentsSingle.fulfilled, (state, { payload }) => {
        state.payment = payload;
        state.loading = false;
      })
      .addCase(doGetUsersPaymentsSingle.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doGetUserPaymentsSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doGetUserPaymentsSingle.fulfilled, (state, { payload }) => {
        state.payment = payload;
        state.loading = false;
      })
      .addCase(doGetUserPaymentsSingle.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doUpdateUsersPaymentsSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doUpdateUsersPaymentsSingle.fulfilled, (state, { payload }) => {
        state.payment = payload;
        state.loading = false;
      })
      .addCase(doUpdateUsersPaymentsSingle.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(doPartialUpdateUsersPaymentsSingle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        doPartialUpdateUsersPaymentsSingle.fulfilled,
        (state, { payload }) => {
          state.payment = payload;
          state.loading = false;
        }
      )
      .addCase(
        doPartialUpdateUsersPaymentsSingle.rejected,
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      )

      .addCase(doVerifyPayments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doVerifyPayments.fulfilled, (state, { payload }) => {
        state.payment = payload;
        state.loading = false;
      })
      .addCase(doVerifyPayments.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;
