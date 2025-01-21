import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getPost from "Post/services/getPost.service";

interface UseGetPostProps {
  postSeq: string | undefined;
}

export function useGetPost({ postSeq }: UseGetPostProps) {
  const navigate = useNavigate();

  const {
    data: post,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["post", postSeq],
    queryFn: async () => {
      if (!postSeq) {
        throw new Error("게시글 번호가 유효하지 않습니다.");
      }
      const result = await getPost({ postSeq });
      if (!result.result) {
        throw new Error("포스트를 불러오는 중 오류가 발생하였습니다.");
      }

      return result.postList;
    },
    staleTime: 10 * 60 * 1000,
    cacheTime: 20 * 60 * 1000,
    enabled: !!postSeq,
    onError: () => {
      navigate("/postlist");
    },
  });

  if (isLoading) {
    return { post: null, isLoading, error: null };
  }

  return { post, isLoading, error, refetch };
}
