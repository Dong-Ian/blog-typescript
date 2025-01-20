import { useNavigate } from "react-router-dom";
import { chcekToken } from "Utils/services/checkToken.service";

export const useCheckToken = () => {
  const navigation = useNavigate();

  const handleCheckToken = async () => {
    const result = await chcekToken();

    if (result.result) {
      return true;
    }

    alert("비정상적인 접근입니다.");
    navigation("/");
    return false;
  };

  return handleCheckToken;
};
