import React from "react";
import { PostProps } from "Post/types/Post.type";
import MDEditor from "@uiw/react-md-editor";

const Contents: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <MDEditor.Markdown
        source={post.postContents}
        style={{ padding: "15px", background: "#f5f5f5", borderRadius: "5px" }}
      />
    </>
  );
};

export default Contents;
