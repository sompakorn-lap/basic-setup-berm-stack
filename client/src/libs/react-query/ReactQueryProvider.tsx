import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react";

const queryClient = new QueryClient();

type ReactQueryProviderPropsType = {
  children: ReactNode
};

function ReactQueryProvider({ children }: ReactQueryProviderPropsType) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;