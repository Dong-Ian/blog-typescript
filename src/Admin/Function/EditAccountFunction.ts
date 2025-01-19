import { EditAccountFunctionProps } from "Admin/Type/AdminType";

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
      body: JSON.stringify({
        name: name,
        color: color.background,
        title: title,
        memo: memo,
        instagram: instagram,
        githubUrl: githubUrl,
        personalUrl: personalUrl,
      }),
      credentials: "include",
    }
  );

  const res = await result.json();

  return res;
}
