import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNote, deleteNote, getNote, getNotes, updateNote } from "@/api";

const notesQueryOptions = (params = {}) => ({
  queryKey: ["notes", params],
  queryFn: () => getNotes(params),
});

export const useNotes = (params = {}, options = {}) => {
  return useQuery({ ...notesQueryOptions(params), ...options });
};

export const useNote = (id, options = {}) => {
  return useQuery({
    queryKey: ["notes", id],
    queryFn: () => getNote(id),
    enabled: !!id,
    ...options,
  });
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => updateNote(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.setQueryData(["notes", data.id], data);
    },
  });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};
