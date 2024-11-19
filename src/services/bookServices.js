import api from "../api/axios";

export const getNovels = async () => {
  try {
    const response = await api.get("/novels/admin/");
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

export const getNovel = async (id) => {
  try {
    const response = await api.get(`/novels/${id}`);
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

export const getNovelsCompleted = async () => {
  try {
    const response = await api.get("/novels/completed");
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

export const getMyNovels = async () => {
  try {
    const response = await api.get(`/novels/mine/`);
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

export const getMyNovel = async (id) => {
  try {
    const response = await api.get(`/novels/mine/${id}`);
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

export const createNovel = async (payload) => {
  try {
    const response = await api.post(`/novels/`, payload);
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

export const updateNovel = async (payload) => {
  try {
    const response = await api.put(`/novels/${payload.id}`, payload);
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

export const patchNovel = async (payload) => {
  try {
    const response = await api.patch(`/novels/${payload.novelId}/`, payload);
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

export const deleteNovel = async (id) => {
  try {
    const response = await api.delete(`/novels/${id}`);
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

export const genre = async (genre) => {
  try {
    const response = await api.get(`/novels/?genre=${genre}`);
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

export const ranking = async (data) => {
  try {
    const response = await api.get(`/novels/?listing=${data}`);
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

export const filterGenre = async (filter) => {
  try {
    const response = await api.get(
      `/novels/?genre=${filter.genre}&listing=${filter.sort}&${filter.filter}`
    );
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

export const filterNovel = async (filter) => {
  try {
    let response;

    if (filter.genre && filter.listing && filter.sort) {
      response = await api.get(
        `/novels/?genre=${filter.genre}&listing=${filter.listing}&${filter.sort}`
      );
    } else if (filter.genre && filter.listing) {
      response = await api.get(
        `/novels/?genre=${filter.genre}&listing=${filter.listing}`
      );
    } else if (filter.listing) {
      response = await api.get(`/novels/?listing=${filter.listing}`);
    } else if (filter.query) {
      response = await api.get(`/novels/?${filter.query}`);
    } else {
      throw new Error("Invalid filter parameters");
    }

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

export const reading = async () => {
  try {
    const response = await api.get(`/novels/reading/`);
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

//NOVEL CHAPTERS

export const getMyNovelChapters = async (id) => {
  try {
    const response = await api.get(`/novels/mine/${id}/chapters`);
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

export const getMyNovelChapter = async (payload) => {
  try {
    const response = await api.get(
      `/novels/mine/${payload.novelId}/chapters/${payload.chapterId}`
    );
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

export const getNovelChapters = async (id) => {
  console.log("arizona", id);
  try {
    const response = await api.get(`/novels/${id}/chapters/`);
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

export const getNovelChapter = async (payload) => {
  try {
    const response = await api.get(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}`
    );
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

export const createNovelChapter = async (payload) => {
  try {
    const response = await api.post(`/novels/${payload.novelId}/chapters/`, {
      // chapter: payload.chapterId,
      title: payload.title,
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

export const updateNovelChapter = async (payload) => {
  try {
    const response = await api.put(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}`,
      {
        chapter: payload.chapterId,
        title: payload.title,
      }
    );
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

export const patchNovelChapter = async (payload) => {
  try {
    const response = await api.patch(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}`,
      {
        chapter: payload.chapterId,
        title: payload.title,
      }
    );
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

export const deleteNovelChapter = async (payload) => {
  try {
    const response = await api.delete(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}`
    );
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

export const getChapterContent = async (payload) => {
  try {
    const response = await api.get(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}/content/`
    );
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

export const patchChapterContent = async (payload) => {
  try {
    const response = await api.patch(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}/content/`,
      {
        title: payload.title,
        content: payload.content,
      }
    );
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
export const getChapterDraft = async (payload) => {
  try {
    const response = await api.get(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}/draft/`,
      {
        title: payload.title,
        draft: payload.content,
      }
    );
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

export const saveAsDraft = async (payload) => {
  try {
    const response = await api.post(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}/draft/`,
      {
        title: payload.title,
        draft: payload.content,
      }
    );
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

export const patchChapterDraft = async (payload) => {
  try {
    const response = await api.patch(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}/draft/`,
      {
        title: payload.title,
        draft: payload.content,
      }
    );
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

export const requestPublish = async (payload) => {
  try {
    const response = await api.post(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}/request-publish/`
    );
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

export const publishChapter = async (payload) => {
  try {
    const response = await api.post(
      `/novels/${payload.novelId}/chapters/${payload.chapterId}/publish/`
    );
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
