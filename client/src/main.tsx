import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactQueryProvider from "@/libs/tanstack/react-query/provider";
import ReactRouterProvider from "@/libs/tanstack/react-router/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <ReactRouterProvider />
    </ReactQueryProvider>
  </StrictMode>
);
