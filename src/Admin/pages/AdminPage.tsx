import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useRecoilState } from "recoil";
import { colorState } from "Utils/Atom/Atom";
import styles from "../styles/admin.module.css";
import { AdminPageProps } from "Admin/types/Admin.type";
import editProfileImage from "Admin/services/editProfileImage.service";
import editAccount from "Admin/services/editAccount.service";
import BackButton from "Utils/components/BackButton";
import EditProfileImage from "Admin/components/EditProfileImage";
import EditElement from "Admin/components/EditElement";
import EditColor from "Admin/components/EditColor";
import AdminHeader from "Utils/components/AdminHeader";

const AdminPage: React.FC<AdminPageProps> = ({ profile }) => {
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [profileImage, setProfileImage] = useState<string>(
    profile.images.profileImage || ""
  );

  const [color, setColor] = useRecoilState(colorState);
  const [state, setState] = useState(color);

  const [name, setName] = useState<string>(profile.userName || "");
  const [memo, setMemo] = useState<string>(profile.memo || "");
  const [githubUrl, setGithubUrl] = useState<string>(profile.githubUrl || "");
  const [instagram, setInstagram] = useState<string>(profile.instagram || "");
  const [personalUrl, setPersonalUrl] = useState<string>(
    profile.personalUrl || ""
  );
  const [title, setTitle] = useState<string>(profile.title || "");

  const handleEditProfileImage = async () => {
    const result = await editProfileImage({ formData });

    if (result.result) {
      alert("프로필 사진 변경이 완료되었습니다.");
      return;
    }

    alert("프로필 사진을 변경하지 못했습니다.");
    return;
  };

  const handleEditProfile = async () => {
    const result = await editAccount({
      name,
      color,
      title,
      memo,
      instagram,
      githubUrl,
      personalUrl,
    });

    if (result.result) {
      setColor({ background: state });
      alert("성공적으로 프로필이 수정되었습니다.");
      return;
    }

    alert("서버 오류");
    return;
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet title="Admin" />
      <AdminHeader state={state} />
      <div className={styles.outer_post_box}>
        <BackButton />
        <p className={styles.main_title}>관리자 페이지</p>
        <hr />
        <p className={styles.title}>프로필 이미지 변경</p>
        <EditProfileImage
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          setFormData={setFormData}
        />
        <div className={styles.change_button}>
          <button onClick={handleEditProfileImage}>프로필 사진 변경</button>
        </div>

        <hr className={styles.hr} />

        <p className={styles.title}>회원 정보 변경</p>
        <EditElement
          placeholder={profile.userName}
          text="이름"
          value={name}
          onChange={setName}
        />
        <EditElement
          placeholder={profile.title}
          text="타이틀"
          value={title}
          onChange={setTitle}
        />
        <EditElement
          placeholder={profile.githubUrl}
          text="GitHub"
          value={githubUrl}
          onChange={setGithubUrl}
        />
        <EditElement
          placeholder={profile.instagram}
          text="Instagram"
          value={instagram}
          onChange={setInstagram}
        />
        <EditElement
          placeholder={profile.memo}
          text="메모"
          value={memo}
          onChange={setMemo}
        />
        <EditElement
          placeholder={profile.personalUrl}
          text="URL"
          value={personalUrl}
          onChange={setPersonalUrl}
        />
        <div className={styles.change_button}>
          <button onClick={handleEditProfile}>회원 정보 변경</button>
        </div>
        <hr className={styles.hr} />
        <p className={styles.title}>대표 색상 변경</p>
        <EditColor state={state} setState={setState} setColor={setColor} />
      </div>
    </>
  );
};

export default AdminPage;
