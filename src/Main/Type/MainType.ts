import { NavigateFunction } from "react-router-dom";
import { PostInterface } from "../../PostList/Type/PostListType";
import { ColorInterface } from "Admin/Type/AdminType";

export interface UserInfoInterface {
  userName: string;
  userId: string;
  userEmail: string;
  instagram: string;
  memo: string;
  personalUrl: string;
  title: string;
  githubUrl: string;
  color: string;
  images: {
    profileImage: string;
    backgroundImage: string;
  };
}

export interface RenderPostListProps {
  postList: PostInterface[];
  navigate: NavigateFunction;
}

export interface RenderAccountProps {
  userInfo: UserInfoInterface;
}

export interface RenderAccountRowProps {
  img: string;
  account: string | null;
}

export interface RenderUserInfoProps {
  userInfo: UserInfoInterface;
  profileImage: string;
}

export interface AdminHeaderInterface {
  state: ColorInterface;
}
