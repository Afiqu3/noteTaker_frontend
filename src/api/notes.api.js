import apiClient from "@/lib/apiClient";

export const getNotes = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiClient(`/notes?${query}`);
};

export const createNote = (payload) => {
  return apiClient("/notes", { method: "POST", body: payload });
};

export const getNote = (id) => {
  return apiClient(`/notes/${id}`);
};

export const updateNote = (id, payload) => {
  return apiClient(`/notes/${id}`, { method: "PATCH", body: payload });
};

export const deleteNote = (id) => {
  return apiClient(`/notes/${id}`, { method: "DELETE" });
};
