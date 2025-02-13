import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useUsers() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => axios.get("/api/user").then((res) => res.data),
    retry: false
  });
}
