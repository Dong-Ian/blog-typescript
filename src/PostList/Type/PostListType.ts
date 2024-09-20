export interface PostInterface {
  categoryName: string;
  isPinned: "0" | "1";
  modDate: string;
  postContents: string;
  postSeq: string;
  postTitle: string;
  regDate: string;
  userName: string;
  viewed: string;
}

export interface PostListProps {
  postList: PostInterface[];
}

export interface CategoryRenderProps {
  category: string;
  isMobileScreen: boolean;
}

export interface TitleRenderProps {
  title: string;
  isMobileScreen: boolean;
}

export interface ContentsRenderProps {
  contents: string;
}

export interface DateTimeRenderProps {
  reg: string;
  viewed: string;
}
