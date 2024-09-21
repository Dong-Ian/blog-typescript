import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useRecoilValue } from "recoil";
import { tokenState } from "Utils/Atom/Atom";

import styles from "../Style/posting.module.css";

import PostingFunction from "Posting/Function/PostingFunction";
import GetCategoryFunction from "Posting/Function/GetCategoryFunction";

import Title from "Posting/Component/Title";
import Contents from "Posting/Component/Contents";
import Catetory from "Posting/Component/Category";
import Tag from "Posting/Component/Tag";
import CategoryList from "Posting/Component/CategoryList";

import Header from "Utils/Component/Header";
import BackButton from "Utils/Component/BackButton";

const PostingPage: React.FC = () => {
  const navigate = useNavigate();

  const token = useRecoilValue(tokenState);

  const [postTitle, setPostTitle] = useState<string>("");
  const [postContents, setPostContents] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");

  const [categoryList, setCategoryList] = useState<string[]>([]);

  async function Posting() {
    if (postTitle === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    if (postContents === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    if (category === "") {
      alert("카테고리를 선택해주세요.");
      return;
    }

    const result = await PostingFunction({
      token: token,
      postTitle: postTitle,
      postContents: postContents,
      imageSeqs: [],
      tags: tags,
      category: category,
      isPinned: "0",
    });

    if (result.result) {
      alert("포스팅 성공");
      navigate(`/post/${result.postSeq}`);
      return;
    }

    alert("포스팅 실패");
    return;
  }

  async function GetCategory() {
    const result = await GetCategoryFunction();

    if (result.result) {
      setCategoryList(result.categoryList || []);
      return;
    }

    alert("카테고리를 불러오는 중 오류가 발생했습니다.");
    return;
  }

  useEffect(() => {
    GetCategory();
  }, []);

  if (categoryList) {
    return (
      <>
        <Helmet title="Posting" />
        <Header />
        <div className={styles.outer_post_box}>
          <div className={styles.post_box}>
            <div style={{ marginLeft: "30px" }}>
              <BackButton />
            </div>
            <Title title={postTitle} setTitle={setPostTitle} />
            <Catetory category={category} setCategory={setCategory} />
            <div className={styles.categorylist}>
              <CategoryList
                categoryList={categoryList}
                setCategory={setCategory}
              />
            </div>
            <Tag tag={tags} setTag={setTags} />
            <Contents content={postContents} setContent={setPostContents} />
            <div className={styles.button}>
              <button onClick={Posting}>글 작성하기</button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PostingPage;
