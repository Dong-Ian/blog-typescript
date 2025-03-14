import { UserInfoInterface } from "Main/types/Main.type";

export interface EditAccountFunctionProps {
  name: string;
  color: string;
  title: string;
  memo: string;
  instagram: string;
  githubUrl: string;
  personalUrl: string;
}

export interface EditColorFunctionProps {
  color: string;
}

export interface EditColorProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
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
