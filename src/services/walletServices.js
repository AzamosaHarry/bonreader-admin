import api from "../api/axios";

export const fetchWalletBalance = async (userId) => {
  try {
    const response = await api.get(`/wallet/${userId}/`);
    return response.data;
  } catch (error) {
    console.log(error);
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

export const updateWalletBalance = async (userId, amount) => {
  try {
    const response = await api.put(`/wallet/${userId}/`, {
      balance: amount,
    });
    return response.data;
  } catch (error) {
    console.log(error);
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

export const partialUpdateWalletBalance = async (userId, amount) => {
  try {
    const response = await api.patch(`/wallet/${userId}/`, {
      balance: amount,
    });
    return response.data;
  } catch (error) {
    console.log(error);
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

export const addFunds = async (userId, amount) => {
  try {
    const response = await api.post(`/wallet/${userId}/fund/`, {
      amount: amount,
    });
    return response.data;
  } catch (error) {
    console.log(error);
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

export const withdrawFunds = async (userId, paymentId, amount) => {
  try {
    const response = await api.post(`/wallet/${userId}/pay/${paymentId}`, {
      amount: amount,
    });
    return response.data;
  } catch (error) {
    console.log(error);
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
