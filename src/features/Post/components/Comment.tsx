import React, { useEffect, useRef } from "react";
import { PostProps } from "features/Post/types/Post.type";

const Comment: React.FC<PostProps> = ({ post }) => {
  const commentsEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 댓글 스크립트를 동적으로 생성하여 삽입
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js"; // Utterances 댓글 스크립트의 URL
    scriptEl.setAttribute("repo", process.env.REACT_APP_GITHUB_REPO || ""); // GitHub 저장소 설정
    scriptEl.setAttribute("issue-term", "pathname"); // 댓글을 연결할 issue의 기준
    scriptEl.setAttribute("theme", "github-light"); // 댓글 테마 설정
    scriptEl.setAttribute("crossorigin", "anonymous"); // 크로스 오리진 설정
    commentsEl.current?.appendChild(scriptEl); // 댓글 스크립트를 div 요소에 추가
  }, [post]); // post가 변경될 때마다 실행

  return <div ref={commentsEl} />;
};

export default Comment;
