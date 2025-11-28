import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const nav = useNavigate();

  const handleLogin = () => {
    if (!name.trim()) return alert("Enter username");

    localStorage.setItem("user", JSON.stringify({ name, role }));
    nav("/profile");
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
