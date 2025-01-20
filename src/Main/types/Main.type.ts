import { NavigateFunction } from "react-router-dom";
import { PostInterface } from "../../PostList/types/PostList.type";

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

export interface PostListProps {
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
  state: string;
}

export interface CategoryRenderProps {
  categoryList: string[];
}
