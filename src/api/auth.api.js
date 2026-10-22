import apiClient from "@/lib/apiClient";

export const userLogin = (payload) => {
  return apiClient("/auth/login", { method: "POST", body: payload });
};

export const userRegister = (payload) => {
  return apiClient("/auth/register", { method: "POST", body: payload });
};

export const getMe = () => {
  return apiClient("/auth/me");
};
