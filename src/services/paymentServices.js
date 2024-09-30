import api from "../api/axios";

export const getUsersPayments = async () => {
  try {
    const response = await api.get(`/payments/`);
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

export const getUsersPaymentsSingle = async (id) => {
  try {
    const response = await api.get(`/payments/${id}`);
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

export const getUserPayments = async (userId) => {
  try {
    const response = await api.get(`/payments/user/${userId}/`);
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

export const getUserPaymentsSingle = async (userId, id) => {
  try {
    const response = await api.get(`/payments/user/${userId}/${id}/`);
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

export const updateUsersPaymentsSingle = async (
  id,
  amount,
  description,
  currency,
  paymentType
) => {
  try {
    const response = await api.put(`/payments/${id}/`, {
      amount: amount,
      description: description,
      currency: currency,
      payment_type: paymentType,
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

export const partialUpdateUsersPaymentsSingle = async (
  id,
  amount,
  description,
  currency,
  paymentType
) => {
  try {
    const response = await api.patch(`/payments/${id}/`, {
      amount: amount,
      description: description,
      currency: currency,
      payment_type: paymentType,
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

export const verifyPayments = async (txn_id) => {
  try {
    const response = await api.get(`/payments/${txn_id}/verify/`);
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
