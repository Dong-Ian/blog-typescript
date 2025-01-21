import { useState } from "react";
import { useNavigate } from "react-router-dom";
import editPost from "EditPost/services/editPost.service";
import { PostInterface } from "Post/types/Post.type";
import { useGetPost } from "Post/hooks/useGetPost";

interface UseEditPostProps {
  post: PostInterface;
}

export function useEditPost({ post }: UseEditPostProps) {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(post.postTitle || "");
  const [content, setContent] = useState<string>(post.postContents || "");
  const [category, setCategory] = useState<string>(post.category || "");
  const [tags, setTags] = useState<string[]>(post.tags);
  const { refetch } = useGetPost({ postSeq: post.postSeq });

  const handleEditPost = async () => {
    if (window.confirm("글을 수정하시겠습니까?")) {
      const result = await editPost({
        postSeq: post.postSeq,
        postTitle: title,
        postContents: content,
        isPinned: post.isPinned,
        tags: tags,
        category: category,
        imageSeqs: [],
      });

      if (result.result) {
        alert("수정이 완료되었습니다.");
        refetch();
        navigate(`/post/${post.postSeq}`);
        return;
      }

      alert("수정이 완료되지 않았습니다.");
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    category,
    setCategory,
    tags,
    setTags,
    handleEditPost,
  };
}
