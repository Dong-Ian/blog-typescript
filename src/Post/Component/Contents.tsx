import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { PostProps } from "Post/Type/PostType";
import MDEditor from "@uiw/react-md-editor";

const Contents: React.FC<PostProps> = ({ post }) => {
  const htmlString = post.postContents;

  const applyStyles = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    Array.from(doc.body.querySelectorAll("h1, h2")).map((element, index) => {
      const level = element.tagName === "H!" ? 1 : 2;
      const id = `${element.tagName.toLowerCase()}-${index}`;
      element.id = id;
      return { text: element.textContent, id, level };
    });

    const preElements = doc.body.querySelectorAll("pre.ql-syntax");
    preElements.forEach((preElement) => {
      if (preElement.textContent && preElement.parentNode) {
        const codeElement = document.createElement("code");
        codeElement.textContent = preElement.textContent.trim();

        const newPreElement = document.createElement("pre");
        newPreElement.className = "ql-syntax";
        newPreElement.setAttribute("spellcheck", "false");
        newPreElement.appendChild(codeElement);

        preElement.parentNode.replaceChild(newPreElement, preElement);
      }
    });

    return doc.body.innerHTML;
  };

  const modifiedHtml = applyStyles(htmlString);

  useEffect(() => {
    hljs.highlightAll();
  }, [modifiedHtml]);

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
