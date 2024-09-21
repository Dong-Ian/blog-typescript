export interface PostingFunctionProps {
  token: string;
  postTitle: string;
  postContents: string;
  imageSeqs: [];
  tags: string[];
  category: string;
  isPinned: "0";
}

export interface TitleProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export interface CategoryProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface CategoryListProps {
  categoryList: string[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface ContentsProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

export interface TagProps {
  tag: string[];
  setTag: React.Dispatch<React.SetStateAction<string[]>>;
}
