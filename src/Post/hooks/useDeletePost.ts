import { useNavigate } from "react-router-dom";
import deletePost from "Post/services/deletePost.service";

interface UseDeletePostProps {
  postSeq: string;
}

export const useDeletePost = ({ postSeq }: UseDeletePostProps) => {
  const navigate = useNavigate();

  const handleDeletePost = async () => {
    if (window.confirm("글을 삭제하시겠습니까?")) {
      const result = await deletePost({ postSeq });
      if (result.result) {
        alert("포스트가 삭제되었습니다.");
        navigate("/postlist");
        return;
      }

      alert("삭제가 완료되지 않았습니다.");
      return false;
    }

    return false;
  };

  return handleDeletePost;
};
