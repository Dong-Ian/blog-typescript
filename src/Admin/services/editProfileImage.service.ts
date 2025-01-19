import { EditProfileImageFunctionProps } from "Admin/types/Admin.type";

export default async function editProfileImage({
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
