import React from "react";
import styles from "../Style/admin.module.css";
import { EditElementProps } from "Admin/Type/AdminType";

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
