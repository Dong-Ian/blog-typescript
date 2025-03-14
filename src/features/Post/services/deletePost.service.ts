import { AuthPostProps } from "features/Post/types/Post.type";

export default async function deletePost({ postSeq }: AuthPostProps) {
  const result = await fetch(`${process.env.REACT_APP_API}/admin/post/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      postSeq: postSeq,
    }),
  });

  const res = await result.json();

  return res;
}
