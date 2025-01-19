import React, { useRef } from "react";
import styles from "../styles/admin.module.css";
import { EditProfileImageProps } from "Admin/types/Admin.type";

const EditProfileImage: React.FC<EditProfileImageProps> = ({
  setFormData,
  profileImage,
  setProfileImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleEditButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onchangeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const uploadFile = files ? files[0] : null; // 선택된 파일

    if (uploadFile) {
      setProfileImage(URL.createObjectURL(uploadFile));

      const newFormData = new FormData();
      newFormData.append("file", uploadFile);

      setFormData(newFormData);
    }
  };

  const handleDeleteProfile = () => {
    setFormData(new FormData());
    setProfileImage("");
  };

  return (
    <div className={styles.change_img}>
      <div className={styles.img}>
        {profileImage != null ? (
          <img alt="프로필 이미지 미리 보기" src={profileImage} />
        ) : null}
      </div>

      <div className={styles.button_div}>
        <button onClick={handleEditButtonClick}>사진 선택</button>

        <button onClick={handleDeleteProfile}>사진 삭제</button>
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={onchangeImageUpload}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default EditProfileImage;
