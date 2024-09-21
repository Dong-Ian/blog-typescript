import { EditProfileImageFunctionProps } from "Admin/Type/AdminType";

export default async function EditProfileImageFunction({
  token,
  formData,
}: EditProfileImageFunctionProps) {
  const result = await fetch(
    `${process.env.REACT_APP_API}/admin/upload/image/profile`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
      redirect: "follow",
    }
  );

  const res = await result.json();

  return res;
}
