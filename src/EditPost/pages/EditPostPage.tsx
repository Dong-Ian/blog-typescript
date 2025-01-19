import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/editpost.module.css";
import { EditPostPageProps } from "EditPost/types/EditPost.type";
import editPost from "EditPost/services/editPost.service";
import Header from "Utils/Component/Header";
import BackButton from "Utils/Component/BackButton";
import Title from "Posting/Component/Title";
import CategoryList from "Posting/Component/CategoryList";
import Catetory from "Posting/Component/Category";
import Tag from "Posting/Component/Tag";
import Contents from "Posting/Component/Contents";

const EditPostPage: React.FC<EditPostPageProps> = ({ post, categoryList }) => {
  const navigate = useNavigate();

  const postSeq = post.postSeq;
  const [title, setTitle] = useState<string>(post.postTitle || "");
  const [content, setContent] = useState<string>(post.postContents || "");
  const [category, setCategory] = useState<string>(post.category || "");
  const [tags, setTags] = useState<string[]>(post.tags);

  const isPinned = post.isPinned;

  async function handleEditPost() {
    if (window.confirm("글을 수정하시겠습니까?")) {
      const result = await editPost({
        postSeq: postSeq,

        postTitle: title,
        postContents: content,
        isPinned: isPinned,
        tags: tags,
        category: category,
        imageSeqs: [],
      });

      if (result.result) {
        alert("수정이 완료되었습니다.");
        navigate(`/post/${post.postSeq}`);

        return;
      }

      alert("수정이 완료되지 않았습니다.");

      return;
    }

    return;
  }

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
