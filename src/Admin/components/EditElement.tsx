import React from "react";
import styles from "../styles/admin.module.css";
import { EditElementProps } from "Admin/types/Admin.type";

const EditElement: React.FC<EditElementProps> = ({
  placeholder,
  text,
  value,
  onChange,
}) => {
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = event;
    onChange(value);
  }

  return (
    <div className={styles.input_element}>
      <div>
        <p>{text}</p>
      </div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
        name={value}
      />
    </div>
  );
};

export default EditElement;
