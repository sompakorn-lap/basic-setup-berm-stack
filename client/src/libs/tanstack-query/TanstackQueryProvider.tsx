import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react";

const queryClient = new QueryClient();

type TanstackQueryProviderPropsType = {
  children: ReactNode
};

function TanstackQueryProvider({ children }: TanstackQueryProviderPropsType) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default TanstackQueryProvider;