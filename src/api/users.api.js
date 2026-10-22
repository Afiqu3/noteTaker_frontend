import apiClient from "@/lib/apiClient";

export const getUsers = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiClient(`/users?${query}`);
};

export const getUser = (id) => {
  return apiClient(`/users/${id}`);
};

export const createUser = (payload) => {
  return apiClient("/users", { method: "POST", body: payload });
};

export const updateUser = (id, payload) => {
  return apiClient(`/users/${id}`, { method: "PATCH", body: payload });
};

export const deleteUser = (id) => {
  return apiClient(`/users/${id}`, { method: "DELETE" });
};
