import { useEffect, useState } from "react";
import getAccount from "features/Main/services/getAccount.service";
import { UserInfoInterface } from "features/Main/types/Main.type";

export function useAccount() {
  const [userInfo, setUserInfo] = useState<UserInfoInterface | null>(null);

  const fetchAccount = async () => {
    const result = await getAccount();
    if (result.result) {
      setUserInfo(result.profileResult);
    } else {
      alert("사용자 정보를 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return userInfo;
}
