import React from "react";
import { TextFieldProps } from "Posting/Type/PostingType";
import MDEditor from "@uiw/react-md-editor";

const Contents: React.FC<TextFieldProps> = ({ value, onChange }) => {
  const handleChange = (value?: string) => {
    if (value !== undefined) {
      onChange(value);
    }
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <MDEditor value={value} onChange={handleChange} height={500} />
    </div>
  );
};

export default Contents;
