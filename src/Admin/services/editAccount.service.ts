import { EditAccountFunctionProps } from "Admin/types/Admin.type";

export default async function editAccount({
  name,
  color,
  title,
  memo,
  instagram,
  githubUrl,
  personalUrl,
}: EditAccountFunctionProps) {
  console.log(name, color, title, memo, instagram, githubUrl, personalUrl);
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
  console.log(res);
  return res;
}
