import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe, userLogin, userRegister } from "@/api";

const meQueryOptions = {
  queryKey: ["auth", "me"],
  queryFn: getMe,
  retry: false,
};

export const useMe = (options = {}) => {
  return useQuery({ ...meQueryOptions, ...options });
};

const useRefreshMe = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
};

export const useLogin = () => {
  const refreshMe = useRefreshMe();
  return useMutation({
    mutationFn: userLogin,
    onSuccess: () => refreshMe(),
  });
};

export const useRegister = () => {
  const refreshMe = useRefreshMe();
  return useMutation({
    mutationFn: userRegister,
    onSuccess: () => refreshMe(),
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return () => {
    queryClient.clear();
  };
};
