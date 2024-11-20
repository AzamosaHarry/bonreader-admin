import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import { getSubscriptiionPlans } from "../../services/subscriptionServices";

export const doGetSubscriptionPlans = createAsyncThunk(
  "books/doGetSubscriptionPlans",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getSubscriptiionPlans();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetSubscriptionPlans = () =>
  useDispatcher(doGetSubscriptionPlans);
