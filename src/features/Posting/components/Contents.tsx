import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { TextFieldProps } from "features/Posting/types/Posting.type";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../Firebase";
import Button from "utils/components/Button";

const Contents: React.FC<TextFieldProps> = ({ value, onChange }) => {
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files ? input.files[0] : null;
      if (!file) return;

      const storageRef = ref(storage, `image/${Date.now()}`);
      try {
        await uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            const updatedValue = `${value || ""}\n![image](${url})`;
            onChange(updatedValue);
          });
        });
      } catch (error) {
        alert("이미지 업로드 실패");
      }
    });
  };

  const handleChange = (value?: string) => {
    if (value !== undefined) {
      onChange(value);
    }
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <div style={{ marginBottom: "10px" }}>
        <Button onClick={imageHandler} text="이미지 업로드" />
      </div>
      <MDEditor
        data-color-mode="light"
        value={value}
        onChange={handleChange}
        height={1000}
      />
    </div>
  );
};

export default Contents;
