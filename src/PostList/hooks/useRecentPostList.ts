import { useEffect, useState } from "react";
import { PostInterface } from "PostList/types/PostList.type";
import { getRecentPostList } from "PostList/services/getPostList.service";
import { useNavigate } from "react-router-dom";

export function useRecentPostList() {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostInterface[] | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleGetRecentPostList = async ({ page }: { page: number }) => {
    const result = await getRecentPostList({ page: page, size: 5 });

    if (result.result) {
      setPostList(result.unpinnedPostList);
      setTotalCount(Number(result.postCount));
      return;
    }

    alert("전체 글을 불러오지 못하였습니다.");
    navigate("/");
    return;
  };

  useEffect(() => {
    handleGetRecentPostList({ page: 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { postList, totalCount, handleGetRecentPostList };
}
