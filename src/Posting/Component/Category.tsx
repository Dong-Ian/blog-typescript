import React from "react";

import styles from "../Style/posting.module.css";

import { CategoryProps } from "Posting/Type/PostingType";

const Catetory: React.FC<CategoryProps> = ({ category, setCategory }) => {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = event;
    setCategory(value);
  }

  return (
    <div className={styles.category}>
      <input
        name="category"
        onChange={handleInput}
        placeholder="카테고리를 입력해주세요"
        value={category}
      />
    </div>
  );
};

export default Catetory;
