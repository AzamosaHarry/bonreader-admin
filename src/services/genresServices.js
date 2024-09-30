import api from "../api/axios";

export const getGenresSingle = async (id) => {
  try {
    const response = await api.get(`/genres/${id}`);
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

export const getGenres = async () => {
  try {
    const response = await api.get(`/genres/`);
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

export const deleteGenres = async (id) => {
  try {
    const response = await api.delete(`/genres/${id}`);
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

export const createGenres = async (payload) => {
  try {
    const response = await api.post(`/genres/`, {
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

export const updateGenres = async (payload) => {
  try {
    const response = await api.put(`/genres/${payload.id}`, {
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

export const patchGenres = async (payload) => {
  try {
    const response = await api.patch(`/genres/${payload.id}`, {
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
