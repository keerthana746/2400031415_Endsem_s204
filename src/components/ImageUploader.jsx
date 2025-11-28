import { useRef } from "react";

export default function ImageUploader({ setImage }) {
  const fileRef = useRef();

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("profileImg", reader.result);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <button onClick={() => fileRef.current.click()}>Choose Image</button>
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={changeImage}
        hidden
      />
    </>
  );
}
