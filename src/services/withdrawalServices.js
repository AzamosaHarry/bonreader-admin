import api from "../api/axios";

export const getWithdrawals = async () => {
  try {
    const response = await api.get(`/withdrawals/`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Add server response details to the error
      error.message = `Service failed: ${
        error.response.data.error || error.response.statusText
      }`;
    } else if (error.request) {
      // Add request details to the error
      error.message = "Service failed: No response received from server.";
    } else {
      // Add request setup details to the error
      error.message = `Service failed: ${error.message}`;
    }
    throw error;
  }
};
