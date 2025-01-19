import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostInterface } from "PostList/types/PostList.type";
import { getPinnedPostList } from "PostList/services/getPostList.service";

export function usePinnedPostList() {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostInterface[] | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleGetPinnedPostList = async ({ page }: { page: number }) => {
    const result = await getPinnedPostList({ page: page, size: 5 });

    if (result.result) {
      setPostList(result.pinnedPostList);
      setTotalCount(Number(result.postCount));
      return;
    }

    alert("고정 글을 불러오지 못하였습니다.");
    navigate("/");
    return;
  };

  useEffect(() => {
    handleGetPinnedPostList({ page: 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { postList, totalCount, handleGetPinnedPostList };
}
