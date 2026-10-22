import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, getPost, getPosts, getUserPosts } from "@/api";

const postsQueryOptions = (params = {}) => ({
  queryKey: ["posts", params],
  queryFn: () => getPosts(params),
});

export const usePosts = (params = {}, options = {}) => {
  return useQuery({ ...postsQueryOptions(params), ...options });
};

export const useUserPosts = (userId, params = {}, options = {}) => {
  return useQuery({
    queryKey: ["posts", "user", userId, params],
    queryFn: () => getUserPosts(userId, params),
    enabled: !!userId,
    ...options,
  });
};

export const usePost = (id, options = {}) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    enabled: !!id,
    ...options,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
