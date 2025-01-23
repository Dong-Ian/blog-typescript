import { getCategoryPostList } from "../../PostList/services/getPostList.service";
import { useQuery } from "@tanstack/react-query";

export function useCagtegoryPostList({
  page,
  size,
  category,
}: {
  page: number;
  size: number;
  category: string;
}) {
  const {
    data: postData,
    error: cagetoryPosError,
    isLoading: isCategoryPostLoading,
    refetch: refetchCategoryPostList,
  } = useQuery({
    queryKey: ["categoryPostList", page, size, category],
    queryFn: async () => {
      const result = await getCategoryPostList({ page, size, category });
      if (result.result) {
        return {
          postList: result.postList || [],
          totalCount: Number(result.postCount),
        };
      } else {
        alert("게시글을 불러오지 못했습니다.");
        return { postList: [], totalCount: 0 };
      }
    },
    staleTime: 10 * 60 * 1000,
    cacheTime: 20 * 60 * 1000,
  });

  return {
    categoryPostList: postData?.postList || [],
    totalCount: postData?.totalCount || 0,
    isCategoryPostLoading,
    cagetoryPosError,
    refetchCategoryPostList,
  };
}
