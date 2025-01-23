import { getRecentPostList } from "../../PostList/services/getPostList.service";
import { useQuery } from "@tanstack/react-query";

export function useRecentPostList({
  page,
  size,
}: {
  page: number;
  size: number;
}) {
  const {
    data: postData,
    error: recentPostError,
    isLoading: isRecentPostLoading,
    refetch: refetchRecentPostList,
  } = useQuery({
    queryKey: ["recentPostList", page, size],
    queryFn: async () => {
      const result = await getRecentPostList({ page, size });
      if (result.result) {
        return {
          postList: result.unpinnedPostList || [],
          totalCount: Number(result.postCount),
        };
      } else {
        alert("최근 게시글 요청 중 에러가 발생했습니다.");
        return { postList: [], totalCount: 0 };
      }
    },
    staleTime: 10 * 60 * 1000,
    cacheTime: 20 * 60 * 1000,
  });

  return {
    recentPostList: postData?.postList || [],
    totalCount: postData?.totalCount || 0,
    isRecentPostLoading,
    recentPostError,
    refetchRecentPostList,
  };
}
