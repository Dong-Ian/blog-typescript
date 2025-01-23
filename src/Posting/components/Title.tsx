import React from "react";
import styles from "../styles/posting.module.css";
import { TextFieldProps } from "Login/types/Login.type";

const Title: React.FC<TextFieldProps> = ({ value, onChange }) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };

  return (
    <div className={styles.title}>
      <input
        name="title"
        onChange={handleInput}
        placeholder="제목을 입력해주세요"
        value={value}
      />
    </div>
  );
};

export default Title;
