import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Customer from "./pages/Customer";
import SuperAdmin from "./pages/SuperAdmin";
import Manager from "./pages/Manager";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/super-admin" element={<SuperAdmin />} />
      </Routes>
    </BrowserRouter>
  );
} // Add closing curly brace here
