import { useQuery } from "@tanstack/react-query";
import { getAdminNotes, getUsersByInterest } from "@/api";

const adminNotesQueryOptions = (params = {}) => ({
  queryKey: ["admin", "notes", params],
  queryFn: () => getAdminNotes(params),
});

export const useAdminNotes = (params = {}, options = {}) => {
  return useQuery({ ...adminNotesQueryOptions(params), ...options });
};

const usersByInterestQueryOptions = (params = {}) => ({
  queryKey: ["admin", "users", "by-interest", params],
  queryFn: () => getUsersByInterest(params),
});

export const useUsersByInterest = (params = {}, options = {}) => {
  return useQuery({ ...usersByInterestQueryOptions(params), ...options });
};
