export interface PostingFunctionProps {
  token: string;
  postTitle: string;
  postContents: string;
  imageSeqs: [];
  tags: string[];
  category: string;
  isPinned: "0";
}

export interface TextFieldProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export interface CategoryListFieldProps {
  categoryList: string[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface TagListFieldProps {
  tag: string[];
  setTag: React.Dispatch<React.SetStateAction<string[]>>;
}
