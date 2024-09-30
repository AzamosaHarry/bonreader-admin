import api from "../api/axios";

export const fetchComments = async (bookId) => {
  try {
    const response = await api.get(`/books/${bookId}/comments`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addComment = async (bookId, commentData) => {
  try {
    const response = await api.post(`/books/${bookId}/comments`, commentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
