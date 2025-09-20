import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Layout from "./pages/Layout";
import GeneralLayout from "./pages/GeneralLayout";
import Home from "./pages/Home";
import PhotoDetail from "./pages/PhotoDetail";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <Toaster position="bottom-center"/>
        <BrowserRouter>
          <Routes>
            <Route element={<GeneralLayout />}>
              <Route index element={<Home />} />
              <Route path="/photo/:id" element={<PhotoDetail />} />
              <Route path="/components" element={<Layout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>
  )
}
