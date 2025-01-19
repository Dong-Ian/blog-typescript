import { AuthPostProps } from "Post/Type/PostType";

export default async function UnPinFunction({ postSeq }: AuthPostProps) {
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
