import { useQuery } from "@tanstack/react-query";
import { getTagPostList } from "PostList/services/getPostList.service";

export function useTagPostList({
  page,
  size,
  tag,
}: {
  page: number;
  size: number;
  tag: string;
}) {
  const {
    data: postData,
    error: tagPostError,
    isLoading: isTagPostLoading,
    refetch: refetchTagPostList,
  } = useQuery({
    queryKey: ["tagPostList", page, size, tag],
    queryFn: async () => {
      const result = await getTagPostList({ page, size, tag });
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
    tagPostList: postData?.postList || [],
    totalCount: postData?.totalCount || 0,
    isTagPostLoading,
    tagPostError,
    refetchTagPostList,
  };
}
