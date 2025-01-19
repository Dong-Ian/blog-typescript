import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoryPostList } from "PostList/services/getPostList.service";
import { PostInterface } from "PostList/types/PostList.type";

interface UseCategoryPostListProps {
  category: string;
}

export function useCategoryPostList({ category }: UseCategoryPostListProps) {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostInterface[] | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleGetCategoryPostList = async ({ page }: { page: number }) => {
    const result = await getCategoryPostList({
      page: page,
      size: 5,
      category: category,
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
    handleGetCategoryPostList({ page: 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { postList, totalCount, handleGetCategoryPostList };
}
