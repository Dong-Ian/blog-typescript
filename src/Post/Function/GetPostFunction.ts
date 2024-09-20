import { PostSeqProps } from "Post/Type/PostType";

export default async function GetPostFunction({ postSeq }: PostSeqProps) {
  const result = await fetch(`${process.env.REACT_APP_API}/post/contents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postSeq: postSeq,
      blogId: process.env.REACT_APP_BLOG_ID,
    }),
  });

  const res = await result.json();

  return res;
}
