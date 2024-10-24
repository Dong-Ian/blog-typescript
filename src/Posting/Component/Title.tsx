import React from "react";

import styles from "../Style/posting.module.css";

import { TextFieldProps } from "Login/Type/LoginType";

const Title: React.FC<TextFieldProps> = ({ value, onChange }) => {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = event;
    onChange(value);
  }

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