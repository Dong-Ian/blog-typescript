export interface PostingFunctionProps {
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
  tagList: string[];
  setTagList: React.Dispatch<React.SetStateAction<string[]>>;
}
