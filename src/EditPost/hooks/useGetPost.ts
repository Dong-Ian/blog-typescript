import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getPost from "Post/services/getPost.service";
import { PostInterface } from "Post/types/Post.type";

interface UseGetPostResult {
  post: PostInterface | null;
  fetchPost: () => Promise<void>;
}

export function useGetPost(postSeq?: string): UseGetPostResult {
  const navigate = useNavigate();
  const [post, setPost] = useState<PostInterface | null>(null);

  const fetchPost = async () => {
    if (!postSeq) {
      alert("유효하지 않은 포스트 번호입니다.");
      navigate("/postlist");
      return;
    }

    const result = await getPost({ postSeq });

    if (result.result) {
      setPost(result.postList);
    } else {
      alert("게시글을 불러오던 중 오류가 발생했습니다.");
      navigate("/postlist");
    }
  };

  return { post, fetchPost };
}
