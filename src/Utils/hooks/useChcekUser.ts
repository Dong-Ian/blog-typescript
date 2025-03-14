import { useQuery } from "@tanstack/react-query";
import { chcekToken } from "utils/services/checkToken.service";

export const useCheckUser = () => {
  const {
    data,
    isLoading: isCheckUserLoading,
    isError,
  } = useQuery(["checkUser"], chcekToken, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  // 유저가 유효한지 여부 판단
  const isValidUser = data?.result || false;

  return { isValidUser, isCheckUserLoading, isError };
};
