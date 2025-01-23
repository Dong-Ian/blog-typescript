import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/main.module.css";
import { CategoryRenderProps } from "Main/types/Main.type";
import { useCategoryList } from "Utils/hooks/useCategoryList";

const CategoryRender: React.FC<CategoryRenderProps> = ({ categoryList }) => {
  const navigate = useNavigate();

  if (categoryList.length !== 0) {
    // 카테고리 목록이 존재할 경우
    return (
      <ul>
        {categoryList.map((category: string) => (
          <li
            key={category}
            onClick={() =>
              navigate(`/postlist/category/${category}`, {
                state: { category: category },
              })
            }
          >
            {category}
          </li>
        ))}
      </ul>
    );
  } else {
    // 카테고리 목록이 없을 경우
    return <div className={styles.null_post2}>등록된 카테고리가 없습니다.</div>;
  }
};

const Category: React.FC = () => {
  const { categoryList } = useCategoryList();

  if (categoryList) {
    return (
      <div className={styles.category}>
        <p>카테고리</p>
        <CategoryRender categoryList={categoryList} />
      </div>
    );
  }

  return (
    <div className={styles.category}>
      <p>카테고리</p>
    </div>
  );
};

export default Category;
