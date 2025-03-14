import React from "react";
import styles from "../styles/editpost.module.css";
import Header from "utils/components/Header";
import BackButton from "utils/components/BackButton";
import Title from "features/Posting/components/Title";
import CategoryList from "features/Posting/components/CategoryList";
import Catetory from "features/Posting/components/Category";
import Tag from "features/Posting/components/Tag";
import Contents from "features/Posting/components/Contents";
import { EditPostPageProps } from "features/EditPost/types/EditPost.type";
import { useEditPost } from "features/EditPost/hooks/useEditPost";
import Button from "utils/components/Button";

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
          <Button onClick={handleEditPost} text="글 작성하기" />
        </div>
      </div>
    </>
  );
};

export default EditPostPage;
