import { useQuery } from "@tanstack/react-query";
import getCategory from "features/Main/services/getCategory.service";

export function useCategoryList() {
  const {
    data: categoryList,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categoryList"],
    queryFn: async () => {
      const result = await getCategory();
      if (result.result) {
        return result.categoryList;
      } else {
        alert("카테고리를 불러오는 중 오류가 발생했습니다.");
      }
    },
    staleTime: 10 * 60 * 1000,
    cacheTime: 20 * 60 * 1000,
  });

  return { categoryList, error, isLoading, refetch };
}
