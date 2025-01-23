import React, { useState } from "react";
import styles from "Posting/styles/posting.module.css";
import { TagListFieldProps } from "Posting/types/Posting.type";

const Tag: React.FC<TagListFieldProps> = ({ tagList, setTagList }) => {
  const [tagElement, setTagElement] = useState("");

  const handleTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTagElement(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (event.key === "Enter" || event.key === " ") &&
      tagElement.trim() !== ""
    ) {
      setTagList((prevTags) => [...prevTags, tagElement]);
      setTagElement(""); // 입력 필드 비우기
    }
  };

  const handleClearClick = (index: number) => {
    setTagList((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const TagRender: React.FC = () => {
    return (
      <>
        {tagList.map((tag, index) => {
          return (
            <div className={styles.tag_box} key={index}>
              <p>{tag}</p>
              <button onClick={() => handleClearClick(index)}>x</button>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className={styles.tag}>
      <TagRender />
      <input
        placeholder="태그를 입력해주세요"
        value={tagElement}
        onChange={handleTag}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Tag;
