import { NavigateFunction } from "react-router-dom";
import { PostInterface } from "../../PostList/Type/PostListType";

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
