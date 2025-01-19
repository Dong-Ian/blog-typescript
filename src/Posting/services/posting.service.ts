import { PostingFunctionProps } from "Posting/types/Posting.type";

export default async function posting({
  postTitle,
  postContents,
  imageSeqs,
  tags,
  category,
  isPinned,
}: PostingFunctionProps) {
  const result = await fetch(
    `${process.env.REACT_APP_API}/admin/post/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        postTitle: postTitle,
        postContents: postContents,
        imageSeqs: imageSeqs,
        tags: tags,
        category: category,
        isPinned: isPinned,
      }),
    }
  );

  const res = await result.json();
  console.log(res);
  return res;
}
