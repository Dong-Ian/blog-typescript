import { useState, useEffect } from "react";
import {
  getPinnedPostList,
  getRecentPostList,
} from "../../PostList/services/getPostList.service";
import { PostInterface } from "../../PostList/types/PostList.type";

interface UsePostListResult {
  pinnedPostList: PostInterface[] | null;
  recentPostList: PostInterface[] | null;
  fetchPinnedPostList: () => Promise<void>;
  fetchRecentPostList: () => Promise<void>;
}

export function usePostList(): UsePostListResult {
  const [recentPostList, setRecentPostList] = useState<PostInterface[] | null>(
    null
  );
  const [pinnedPostList, setPinnedPostList] = useState<PostInterface[] | null>(
    null
  );

  const fetchRecentPostList = async () => {
    try {
      const result = await getRecentPostList({ page: 1, size: 5 });
      if (result.result) {
        setRecentPostList(result.unpinnedPostList || []);
      } else {
        alert("최근 게시글을 불러오지 못했습니다.");
      }
    } catch (error) {
      alert("최근 게시글 요청 중 에러가 발생했습니다.");
    }
  };

  const fetchPinnedPostList = async () => {
    try {
      const result = await getPinnedPostList({ page: 1, size: 5 });
      if (result.result) {
        setPinnedPostList(result.pinnedPostList || []);
      } else {
        alert("고정 게시글을 불러오지 못했습니다.");
      }
    } catch (error) {
      alert("고정 게시글 요청 중 에러가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchRecentPostList();
    fetchPinnedPostList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    recentPostList,
    pinnedPostList,
    fetchRecentPostList,
    fetchPinnedPostList,
  };
}

// export function usePostList() {
//   const {data: recentPostList,
//     error: recentPostError,
//     isLoading: isRecentPostLoading,
//     refetch: refetchRecentPostList,
//   } = useQuery({
//     queryKey: ["recentPostList"],
//     queryFn: async () => {
//       const result =
//     }
//   })
// }
