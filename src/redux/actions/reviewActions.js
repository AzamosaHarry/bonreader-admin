import { createAsyncThunk } from "@reduxjs/toolkit";
import { addComment, fetchComments } from "../../services/reviewServices";

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await fetchComments(bookId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postComment = createAsyncThunk(
  "comments/postComment",
  async ({ bookId, commentData }, { rejectWithValue }) => {
    try {
      const response = await addComment(bookId, commentData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
