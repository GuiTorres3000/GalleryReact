import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components" element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  )
}
