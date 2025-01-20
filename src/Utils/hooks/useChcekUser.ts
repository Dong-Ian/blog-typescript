import { useState } from "react";
import { chcekToken } from "Utils/services/checkToken.service";

export const useCheckUser = () => {
  const [isValidUser, setIsValidUser] = useState(false);
  const handleCheckUser = async () => {
    const result = await chcekToken();

    if (result.result) {
      setIsValidUser(true);
    }

    setIsValidUser(false);
  };

  return { isValidUser, handleCheckUser };
};
