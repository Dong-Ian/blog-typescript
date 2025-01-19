import React from "react";
import styles from "../Style/admin.module.css";
import { EditColorProps } from "Admin/types/Admin.type";
import EditColorFunction from "../services/EditColorFunction";
import { SketchPicker, ColorResult } from "react-color";

const EditColor: React.FC<EditColorProps> = ({ state, setState, setColor }) => {
  function handleChangeComplete(color: ColorResult) {
    setState({ background: color.hex });
  }

  async function onClickEditBtn() {
    const result = await EditColorFunction({ color: state });

    if (result.result) {
      alert("색상이 변경되었습니다.");
      setColor(state);

      return;
    }

    alert("오류가 발생했습니다.");

    return;
  }

  return (
    <div className={styles.change_color}>
      <div>
        <SketchPicker
          color={state.background}
          onChangeComplete={handleChangeComplete}
        />
      </div>
      <div className={styles.change_button}>
        <button onClick={onClickEditBtn}>대표 색상 수정</button>
      </div>
    </div>
  );
};

export default EditColor;
