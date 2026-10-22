import apiClient from "@/lib/apiClient";

export const getAdminNotes = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiClient(`/admin/notes?${query}`);
};

export const getUsersByInterest = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiClient(`/admin/users/by-interest?${query}`);
};
