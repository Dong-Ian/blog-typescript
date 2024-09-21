import { EditAccountFunctionProps } from "Admin/Type/AdminType";

export default async function ({
  token,
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
        Authorization: `Bearer ${token}`,
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
    }
  );

  const res = await result.json();

  return res;
}
