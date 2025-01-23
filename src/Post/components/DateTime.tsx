import React from "react";
import styles from "Post/styles/post.module.css";
import { DateTimeProps } from "Post/types/Post.type";

const DateTimeRender: React.FC<DateTimeProps> = ({ reg, viewed }) => {
  const date = new Date(reg);
  date.setHours(date.getHours() + 9);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const min = date.getMinutes();

  const paddedHour = String(hour).padStart(2, "0");
  const paddedMin = String(min).padStart(2, "0");

  const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;

  return (
    <div className={styles.date}>
      <p>
        <time dateTime={`${formattedDate}T${paddedHour}:${paddedMin}:00+09:00`}>
          {year}년 {month}월 {day}일 {paddedHour}:{paddedMin}
        </time>
        <span> | 조회수 {viewed}</span>
      </p>
    </div>
  );
};

export default DateTimeRender;
