import { EditAccountFunctionProps } from "Admin/types/Admin.type";

export default async function EditAccountFunction({
  name,
  color,
  title,
  memo,
  instagram,
  githubUrl,
  personalUrl,
}: EditAccountFunctionProps) {
  const result = await fetch(
    `${process.env.REACT_APP_API}/admin/user/profile/update`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: name,
        color: color.background,
        title: title,
        memo: memo,
        instagram: instagram,
        githubUrl: githubUrl,
        personalUrl: personalUrl,
      }),
    }
  );

  const res = await result.json();

  return res;
}
