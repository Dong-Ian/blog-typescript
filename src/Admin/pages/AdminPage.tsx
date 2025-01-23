import React from "react";
import { Helmet } from "react-helmet";
import styles from "../styles/admin.module.css";
import BackButton from "Utils/components/BackButton";
import EditProfileImage from "Admin/components/EditProfileImage";
import EditElement from "Admin/components/EditElement";
import EditColor from "Admin/components/EditColor";
import AdminHeader from "Utils/components/AdminHeader";
import Loading from "Utils/components/Loading";
import { AdminPageProps } from "Admin/types/Admin.type";
import { useEditProfileImage } from "Admin/hooks/useEditProfileImage";
import { useEditProfile } from "Admin/hooks/useEditProfile";

const AdminPage: React.FC<AdminPageProps> = ({ profile }) => {
  const { profileImage, setProfileImage, setFormData, handleEditProfileImage } =
    useEditProfileImage(profile.images.profileImage || "");

  const {
    name,
    setName,
    title,
    setTitle,
    memo,
    setMemo,
    githubUrl,
    setGithubUrl,
    instagram,
    setInstagram,
    personalUrl,
    setPersonalUrl,
    state,
    setState,
    handleEditProfile,
    setColor,
  } = useEditProfile(profile);

  if (!profile) {
    return <Loading />;
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
