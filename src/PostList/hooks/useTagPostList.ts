import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTagPostList } from "PostList/services/getPostList.service";
import { PostInterface } from "PostList/types/PostList.type";

interface UseTagyPostListProps {
  tag: string;
}

export function useTagPostList({ tag }: UseTagyPostListProps) {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostInterface[] | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleGetTagPostList = async ({ page }: { page: number }) => {
    const result = await getTagPostList({
      page: page,
      size: 5,
      tag: tag,
    });

    if (result.result) {
      setPostList(result.postList);
      setTotalCount(Number(result.postCount));
      return;
    }

    alert("글을 불러오지 못하였습니다.");
    navigate("/");
    return;
  };

  useEffect(() => {
    handleGetTagPostList({ page: 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { postList, totalCount, handleGetTagPostList };
}
