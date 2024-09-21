import React from "react";

import styles from "../Style/posting.module.css";

import { TitleProps } from "Posting/Type/PostingType";

const Title: React.FC<TitleProps> = ({ title, setTitle }) => {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = event;
    setTitle(value);
  }

  return (
    <div className={styles.title}>
      <input
        name="title"
        onChange={handleInput}
        placeholder="제목을 입력해주세요"
        value={title}
      />
    </div>
  );
};

export default Title;
