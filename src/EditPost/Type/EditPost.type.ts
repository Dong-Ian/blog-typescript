import { PostInterface } from "Post/Type/PostType";

export interface EditPostFunctionProps {
  postTitle: string;
  postContents: string;
  imageSeqs: [];
  tags: string[];
  category: string;
  isPinned: "0" | "1";
  postSeq: string;
}

export interface EditPostPageProps {
  post: PostInterface;
  categoryList: string[];
}
