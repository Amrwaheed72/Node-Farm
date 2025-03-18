import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Product from "./pages/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
