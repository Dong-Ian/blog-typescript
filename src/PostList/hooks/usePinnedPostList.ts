import { getPinnedPostList } from "../../PostList/services/getPostList.service";
import { useQuery } from "@tanstack/react-query";

export function usePinnedPostList({
  page,
  size,
}: {
  page: number;
  size: number;
}) {
  const {
    data: postData,
    error: pinnedPosError,
    isLoading: isPinnedPostLoading,
    refetch: refetchPinnedPostList,
  } = useQuery({
    queryKey: ["pinnedPostList", page, size],
    queryFn: async () => {
      const result = await getPinnedPostList({ page, size });
      if (result.result) {
        return {
          postList: result.pinnedPostList || [],
          totalCount: Number(result.postCount),
        };
      } else {
        alert("고정 게시글을 불러오지 못했습니다.");
        return { postList: [], totalCount: 0 };
      }
    },
    staleTime: 10 * 60 * 1000,
    cacheTime: 20 * 60 * 1000,
  });

  return {
    pinnedPostList: postData?.postList || [],
    totalCount: postData?.totalCount || 0,
    isPinnedPostLoading,
    pinnedPosError,
    refetchPinnedPostList,
  };
}
