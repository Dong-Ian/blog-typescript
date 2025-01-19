import { EditPostFunctionProps } from "EditPost/Type/EditPostType";

export default async function EditPostFunction({
  postSeq,
  postTitle,
  postContents,
  isPinned,
  tags,
  category,
}: EditPostFunctionProps) {
  const result = await fetch(`${process.env.REACT_APP_API}/admin/post/edit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      postSeq: postSeq,
      postTitle: postTitle,
      postContents: postContents,
      isPinned: isPinned,
      tags: tags,
      category: category,
    }),
  });

  const res = await result.json();

  return res;
}
