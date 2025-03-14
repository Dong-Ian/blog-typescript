import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/post.module.css";

interface CategoryProps {
  category: string;
  isMobileScreen: boolean;
}

const Category: React.FC<CategoryProps> = ({ category, isMobileScreen }) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        isMobileScreen
          ? `${styles.category} ${styles.small_category}`
          : `${styles.category} ${styles.big_category}`
      }
      onClick={() =>
        navigate(`/postlist/category/${category}`, {
          state: { category: category },
        })
      }
    >
      <p>{category}</p>
    </div>
  );
};

export default Category;
