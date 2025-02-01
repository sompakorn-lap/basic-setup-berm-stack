import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "../../routeTree.gen";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({ routeTree });

function TanstackRouterProvider() {
  return <RouterProvider router={router} />;
}

export default TanstackRouterProvider;
