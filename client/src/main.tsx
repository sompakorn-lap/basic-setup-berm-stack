import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import QueryProvider from "@/libs/tanstack/QueryProvider";
import RouterProvider from "@/libs/tanstack/RouterProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider/>
    </QueryProvider>
  </StrictMode>
);
