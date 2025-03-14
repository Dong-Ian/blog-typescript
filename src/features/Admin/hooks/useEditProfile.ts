import { useState } from "react";
import editAccount from "features/Admin/services/editAccount.service";
import { useFetchUser } from "utils/hooks/useFetchUser";

export function useEditProfile(profile: any) {
  const [color, setColor] = useState<string>(profile.color);
  const [state, setState] = useState(color);

  const [name, setName] = useState<string>(profile.userName || "");
  const [memo, setMemo] = useState<string>(profile.memo || "");
  const [githubUrl, setGithubUrl] = useState<string>(profile.githubUrl || "");
  const [instagram, setInstagram] = useState<string>(profile.instagram || "");
  const [personalUrl, setPersonalUrl] = useState<string>(
    profile.personalUrl || ""
  );
  const [title, setTitle] = useState<string>(profile.title || "");
  const { refetch } = useFetchUser();
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
      alert("성공적으로 프로필이 수정되었습니다.");
      refetch();
      return;
    }

    alert("서버 오류");
  };

  return {
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
  };
}
