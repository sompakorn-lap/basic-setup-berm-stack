import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useUsers(){
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get("/api/user");
      return res.data;
    }
  });
}