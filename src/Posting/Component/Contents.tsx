import React, { useMemo, useRef } from "react";

import { storage } from "../../Firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import ReactQuill, { Quill } from "react-quill";
import hljs from "highlight.js";

import styles from "../Style/posting.module.css";

import { ContentsProps } from "Posting/Type/PostingType";

const Contents: React.FC<ContentsProps> = ({ content, setContent }) => {
  const quillRef = useRef<ReactQuill | null>(null); // 초기값을 null로 설정

  const bold = Quill.import("formats/bold");
  bold.tagName = "b";
  Quill.register(bold, true);

  const italic = Quill.import("formats/italic");
  italic.tagName = "i";
  Quill.register(italic, true);

  const BlockEmbed = Quill.import("blots/block/embed");

  class DividerBlot extends BlockEmbed {
    static blotName = "divider";
    static tagName = "hr";
  }

  Quill.register(DividerBlot);

  hljs.configure({
    languages: [
      "javascript",
      "ruby",
      "python",
      "java",
      "cpp",
      "kotlin",
      "sql",
      "swift",
      "c",
      "flutter",
    ],
  });

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const editor = quillRef.current?.getEditor(); // quillRef가 존재하는지 확인
      if (!editor) return; // editor가 undefined일 경우 함수 종료

      const file = input.files ? input.files[0] : null; // input.files가 null인지 확인
      if (!file) return; // 파일이 없으면 함수 종료

      const range = editor.getSelection(true);
      try {
        // Firebase Storage에 이미지 업로드
        const storageRef = ref(storage, `image/${Date.now()}`);
        await uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            // 에디터에 이미지 URL을 삽입
            editor.insertEmbed(range.index, "image", url);
            editor.setSelection({ index: range.index + 1, length: 0 }); // 이미지 뒤로 커서를 이동
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block", "divider"],
          ["link", "image", "video"],
          [{ header: 1 }, { header: 2 }],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value, // text의 타입 명시
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
    };
  }, []);

  return (
    <div className={styles.textForm}>
      {/* <ReactQuill
        className={styles.textBox}
        placeholder="내용을 작성해주세요"
        theme="snow"
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules}
      /> */}
    </div>
  );
};

export default Contents;
