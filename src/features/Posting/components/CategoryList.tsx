import React from "react";
import { CategoryListFieldProps } from "features/Posting/types/Posting.type";

const CategoryList: React.FC<CategoryListFieldProps> = ({
  categoryList,
  setCategory,
}) => {
  const onClickCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <>
      {categoryList.map((category, index) => (
        <div onClick={() => onClickCategory(category)} key={index}>
          <div>
            <p>{category}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryList;
