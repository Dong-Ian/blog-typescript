export interface PostInterface {
  category: string;
  isPinned: "0" | "1";
  postContents: string;
  postSeq: string;
  postTitle: string;
  modDate: string;
  regDate: string;
  tags: string[];
  urls: null;
  userName: string;
  viewed: string;
}

export interface PostProps {
  post: PostInterface;
}

export interface PostSeqProps {
  postSeq: string;
}

export interface AuthPostProps {
  postSeq: string;
}

export interface PostControlProps {
  postSeq: string;
  togglePinnedState: () => void;
}

export interface TagListProps {
  tagList: string[];
}

export interface TitleProps {
  title: string;
  isMobileScreen: boolean;
}

export interface DateTimeProps {
  reg: string;
  viewed: string;
}

export interface AdminProps {
  isLoggedIn: boolean;

  postSeq: string;
  post: PostInterface;
  togglePinnedState: () => void;
}
