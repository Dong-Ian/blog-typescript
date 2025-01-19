import { UserInfoInterface } from "Main/types/Main.type";

export interface ColorInterface {
  background: string;
}

export interface EditAccountFunctionProps {
  name: string;
  color: ColorInterface;
  title: string;
  memo: string;
  instagram: string;
  githubUrl: string;
  personalUrl: string;
}

export interface EditColorFunctionProps {
  color: ColorInterface;
}

export interface EditColorProps {
  state: ColorInterface;
  setState: React.Dispatch<React.SetStateAction<ColorInterface>>;
  setColor: React.Dispatch<React.SetStateAction<ColorInterface>>;
}

export interface EditProfileImageFunctionProps {
  formData: FormData;
}

export interface AdminPageProps {
  profile: UserInfoInterface;
}

export interface EditElementProps {
  placeholder: string;
  text: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export interface EditProfileImageProps {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  profileImage: string;
  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
}
