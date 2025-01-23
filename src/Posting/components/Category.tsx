import React from "react";
import styles from "Posting/styles/posting.module.css";
import { TextFieldProps } from "Login/types/Login.type";

const Catetory: React.FC<TextFieldProps> = ({ value, onChange }) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };

  return (
    <div className={styles.category}>
      <input
        name="category"
        onChange={handleInput}
        placeholder="카테고리를 입력해주세요"
        value={value}
      />
    </div>
  );
};

export default Catetory;
