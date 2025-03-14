import { useState } from "react";
import editProfileImage from "features/Admin/services/editProfileImage.service";

export function useEditProfileImage(initialImage: string) {
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [profileImage, setProfileImage] = useState<string>(initialImage);

  const handleEditProfileImage = async () => {
    const result = await editProfileImage({ formData });

    if (result.result) {
      alert("프로필 사진 변경이 완료되었습니다.");
      return;
    }

    alert("프로필 사진을 변경하지 못했습니다.");
  };

  return {
    profileImage,
    setProfileImage,
    setFormData,
    handleEditProfileImage,
  };
}
