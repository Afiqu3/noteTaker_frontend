import apiClient from "@/lib/apiClient";

export const getPosts = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiClient(`/posts?${query}`);
};

export const getUserPosts = (userId, params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiClient(`/posts/users/${userId}?${query}`);
};

export const getPost = (id) => {
  return apiClient(`/posts/${id}`);
};

export const createPost = (payload) => {
  return apiClient("/posts", { method: "POST", body: payload });
};
