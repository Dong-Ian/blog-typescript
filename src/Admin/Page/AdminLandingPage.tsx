import React, { useEffect, useState } from "react";
import { UserInfoInterface } from "Main/Type/MainType";
import GetAccountFunction from "Main/Function/GetAccountFunction";
import AdminPage from "./AdminPage";

const AdminLandingPage: React.FC = () => {
  const [profile, setProfile] = useState<UserInfoInterface | null>(null);

  async function GetAccount() {
    const result = await GetAccountFunction();

    if (result.result) {
      setProfile(result.profileResult);
      return;
    }

    alert("프로필을 불러오는 중 오류가 발생했습니다.");

    return;
  }

  useEffect(() => {
    if (!profile) {
      GetAccount();
    }
  }, [profile]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return <AdminPage profile={profile} />;
};

export default AdminLandingPage;
