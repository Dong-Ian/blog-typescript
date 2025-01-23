import React from "react";
import styles from "../styles/editpost.module.css";
import Header from "Utils/components/Header";
import BackButton from "Utils/components/BackButton";
import Title from "Posting/components/Title";
import CategoryList from "Posting/components/CategoryList";
import Catetory from "Posting/components/Category";
import Tag from "Posting/components/Tag";
import Contents from "Posting/components/Contents";
import { EditPostPageProps } from "EditPost/types/EditPost.type";
import { useEditPost } from "EditPost/hooks/useEditPost";

const EditPostPage: React.FC<EditPostPageProps> = ({ post, categoryList }) => {
  const {
    title,
    setTitle,
    content,
    setContent,
    category,
    setCategory,
    tags,
    setTags,
    handleEditPost,
  } = useEditPost({ post });

  return (
    <>
      <Header />
      <div className={styles.outer_post_box}>
        <div style={{ marginLeft: "30px" }}>
          <BackButton />
        </div>
        <Title value={title} onChange={setTitle} />
        <Catetory value={category} onChange={setCategory} />
        {categoryList.length !== 0 && (
          <div className={styles.category_list}>
            <CategoryList
              categoryList={categoryList}
              setCategory={setCategory}
            />
          </div>
        )}
        <Tag tagList={tags} setTagList={setTags} />
        <Contents value={content} onChange={setContent} />

        <div className={styles.button}>
          <button onClick={handleEditPost}>글 수정하기</button>
        </div>
      </div>
    </>
  );
};

export default EditPostPage;
