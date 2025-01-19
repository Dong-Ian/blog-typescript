import { EditProfileImageFunctionProps } from "Admin/Type/AdminType";

export default async function EditProfileImageFunction({
  formData,
}: EditProfileImageFunctionProps) {
  const result = await fetch(
    `${process.env.REACT_APP_API}/admin/upload/image/profile`,
    {
      method: "POST",

      body: formData,
      redirect: "follow",
      credentials: "include",
    }
  );

  const res = await result.json();

  return res;
}
