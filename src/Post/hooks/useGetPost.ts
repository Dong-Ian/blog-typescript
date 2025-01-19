import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getPost from "Post/services/getPost.service";
import { PostInterface } from "Post/types/Post.type";

interface UseGetPostProps {
  postSeq: string | undefined;
}

export function useGetPost({ postSeq }: UseGetPostProps) {
  const navigate = useNavigate();
  const [post, setPost] = useState<PostInterface | null>(null);

  const fetchGetPost = async () => {
    if (!postSeq) {
      alert("게시글 번호가 유효하지 않습니다.");
      navigate("/");
      return;
    }

    const result = await getPost({ postSeq: postSeq });

    if (result.result) {
      setPost(result.postList);

      return;
    }

    alert("포스트를 불러오는 중 오류가 발생하였습니다.");
    navigate("/postlist");

    return;
  };

  return { post, fetchGetPost };
}
