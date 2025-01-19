import React from "react";
import styles from "../Style/post.module.css";
import { DateTimeProps } from "Post/Type/PostType";

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

  return (
    <div className={styles.date}>
      <p>
        {year}년 {month}월 {day}일 {paddedHour}:{paddedMin}
        <span> | 조회수 {viewed}</span>
      </p>
    </div>
  );
};

export default DateTimeRender;
