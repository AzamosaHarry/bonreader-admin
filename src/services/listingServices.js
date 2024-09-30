import api from "../api/axios";

export const getListingsSingle = async (id) => {
  try {
    const response = await api.get(`/listings/${id}`);
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

export const getListings = async () => {
  try {
    const response = await api.get(`/listings/`);
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

export const deleteListings = async (id) => {
  try {
    const response = await api.delete(`/listings/${id}`);
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

export const createListings = async (payload) => {
  try {
    const response = await api.post(`/listings/`, {
      name: payload.name,
    });
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

export const updateListings = async (payload) => {
  try {
    const response = await api.put(`/listings/${payload.id}`, {
      name: payload.name,
    });
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

export const patchListings = async (payload) => {
  try {
    const response = await api.patch(`/listings/${payload.id}`, {
      name: payload.name,
    });
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
