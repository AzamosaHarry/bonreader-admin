// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  doFetchUser,
  doFetchUserMe,
  doFetchUsers,
  doCreateUser,
  doDeleteUser,
  doUpdateUser,
  doPartialUpdateUser,
  doUpdateUserMe,
  doPartialUpdateUserMe,
} from "../actions/userActions";

// Define initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Create the slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reseuseerState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch user
      .addCase(doFetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doFetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(doFetchUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // fetch user me
      .addCase(doFetchUserMe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doFetchUserMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(doFetchUserMe.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // fetch users
      .addCase(doFetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doFetchUsers.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(doFetchUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // create user
      .addCase(doCreateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doCreateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(doCreateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // delete user
      .addCase(doDeleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doDeleteUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(doDeleteUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // update user
      .addCase(doUpdateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doUpdateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(doUpdateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // partial update user
      .addCase(doPartialUpdateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doPartialUpdateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(doPartialUpdateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // update user me
      .addCase(doUpdateUserMe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doUpdateUserMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(doUpdateUserMe.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // partial update user me
      .addCase(doPartialUpdateUserMe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doPartialUpdateUserMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(doPartialUpdateUserMe.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;
