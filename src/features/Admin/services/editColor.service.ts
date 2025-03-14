import { EditColorFunctionProps } from "features/Admin/types/Admin.type";

export default async function editColor({ color }: EditColorFunctionProps) {
  const result = await fetch(
    `${process.env.REACT_APP_API}/admin/user/profile/color`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        color: color,
      }),
    }
  );

  const res = await result.json();

  return res;
}
