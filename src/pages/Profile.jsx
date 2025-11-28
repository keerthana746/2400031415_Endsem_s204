import { useEffect, useState } from "react";
import ImageUploader from "../components/ImageUploader";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [image, setImage] = useState(localStorage.getItem("profileImg"));

  const logout = () => {
    localStorage.clear();
    nav("/");
  };

  return (
    <div className="container">
      <h2>Welcome {user.name}</h2>
      <h4>Role: {user.role.toUpperCase()}</h4>

      {image && <img src={image} className="preview" />}

      <ImageUploader setImage={setImage} />

      {user.role === "admin" && (
        <button onClick={() => alert("Admin Panel!")}>
          Admin Tools
        </button>
      )}

      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
