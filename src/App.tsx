import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import GeneralLayout from "./pages/GeneralLayout";
import Home from "./pages/Home";
import PhotoDetail from "./pages/PhotoDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route index element={<Home />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
          <Route path="/components" element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
