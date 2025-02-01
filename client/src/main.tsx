import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TanstackQueryProvider from "./libs/tanstack-query/TanstackQueryProvider";
import TanstackRouterProvider from "./libs/tanstack-router/TanstackRouterProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryProvider>
      <TanstackRouterProvider />
    </TanstackQueryProvider>
  </StrictMode>
);
