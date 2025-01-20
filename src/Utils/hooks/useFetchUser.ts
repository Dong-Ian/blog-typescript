import { useQuery } from "@tanstack/react-query";
import getAccount from "Main/services/getAccount.service";
import { UserInfoInterface } from "Main/types/Main.type";

export function useFetchUser() {
  const {
    data: userInfo,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      console.log("start query");
      const result = await getAccount();

      if (result.result) {
        return result.profileResult as UserInfoInterface;
      } else {
        console.log("Error");
        throw new Error("Failed to fetch user information.");
      }
    },
    // staleTime: 0,
    staleTime: 10 * 60 * 1000,
    cacheTime: 20 * 60 * 1000,
    onError: (error: Error) => {
      alert("사용자 정보를 불러오지 못했습니다.");
      console.error(error);
    },
  });

  return { userInfo, error, isLoading, refetch };
}
