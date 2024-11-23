import { createAsyncThunk } from "@reduxjs/toolkit";

import { useDispatcher } from "../../utils/useDispatcher";
import {
  createSubscriptionPlan,
  getSubscriptiionPlans,
} from "../../services/subscriptionServices";

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

export const doCreateSubscriptionPlan = createAsyncThunk(
  "books/doCreateSubscriptionPlan",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await createSubscriptionPlan(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Action failed");
    }
  }
);

export const useGetSubscriptionPlans = () =>
  useDispatcher(doGetSubscriptionPlans);
export const useCreateSubscriptionPlan = () =>
  useDispatcher(doCreateSubscriptionPlan);
