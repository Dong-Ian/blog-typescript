import React from "react";

import { CategoryListProps } from "Posting/Type/PostingType";

const CategoryList: React.FC<CategoryListProps> = ({
  categoryList,
  setCategory,
}) => {
  function onClickCategory(category: string) {
    setCategory(category);
  }

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
