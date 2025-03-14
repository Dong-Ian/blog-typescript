import { AuthPostProps } from "features/Post/types/Post.type";

export default async function unpin({ postSeq }: AuthPostProps) {
  const result = await fetch(
    `${process.env.REACT_APP_API}/admin/post/update/unpin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        postSeq: postSeq,
        blogId: process.env.REACT_APP_BLOG_ID,
      }),
    }
  );

  const res = await result.json();

  return res;
}
