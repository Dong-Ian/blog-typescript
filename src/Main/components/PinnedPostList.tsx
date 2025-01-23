import styles from "Main/styles/main.module.css";
import PostList from "PostList/components/PostList";
import { PostListProps } from "Main/types/Main.type";

const PinnedPostList: React.FC<PostListProps> = ({ postList, navigate }) => {
  return (
    <div className={styles.pinned_box}>
      <div className={styles.btn} onClick={() => navigate("/postlist/pinned")}>
        {"고정글 >"}
      </div>
      {postList && postList.length !== 0 ? (
        <PostList postList={postList} />
      ) : (
        <div className={styles.null_post}>등록된 게시글이 없습니다</div>
      )}
    </div>
  );
};

export default PinnedPostList;
