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
  token: string;
  postSeq: string;
}

export interface PostControlProps {
  token: string;
  postSeq: string;
  setIsChangePinnedState: React.Dispatch<React.SetStateAction<boolean>>;
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
  token: string;
  postSeq: string;
  post: PostInterface;
  setIsChangePinnedState: React.Dispatch<React.SetStateAction<boolean>>;
}
