import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<AuthGuard><Profile /></AuthGuard>} />
      </Routes>
    </BrowserRouter>
  );
}

function AuthGuard({ children }) {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/" />;
}
