import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetch("/api/user").then(res => res.json()),
    retry: false
  });
}
