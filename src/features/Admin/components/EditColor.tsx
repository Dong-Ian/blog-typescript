import editColor from "features/Admin/services/editColor.service";
import { EditColorProps } from "features/Admin/types/Admin.type";
import React from "react";
import { ColorResult, SketchPicker } from "react-color";
import { useFetchUser } from "utils/hooks/useFetchUser";
import styles from "../styles/admin.module.css";

const EditColor: React.FC<EditColorProps> = ({ state, setState }) => {
  const { refetch } = useFetchUser();
  const handleChangeComplete = (color: ColorResult) => {
    setState(color.hex);
  };

  const onClickEditBtn = async () => {
    const result = await editColor({ color: state });

    if (result.result) {
      alert("색상이 변경되었습니다.");
      refetch();
      return;
    }

    alert("오류가 발생했습니다.");

    return;
  };

  return (
    <div className={styles.change_color}>
      <div>
        <SketchPicker color={state} onChangeComplete={handleChangeComplete} />
      </div>
      <div className={styles.change_button}>
        <button onClick={onClickEditBtn}>대표 색상 수정</button>
      </div>
    </div>
  );
};

export default EditColor;
