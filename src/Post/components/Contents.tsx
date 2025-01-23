import React from "react";
import { PostProps } from "Post/types/Post.type";
import MDEditor from "@uiw/react-md-editor";

const Contents: React.FC<PostProps> = ({ post }) => {
  return (
    <div data-color-mode="light">
      <MDEditor.Markdown
        source={post.postContents}
        style={{
          padding: "15px",
          borderRadius: "5px",
          lineHeight: "30px",
        }}
      />
    </div>
  );
};

export default Contents;
