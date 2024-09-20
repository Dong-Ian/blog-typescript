import React, { useEffect } from "react";

import { useRecoilValue } from "recoil";
import { colorState } from "Utils/Atom/Atom";

import styles from "../Style/pagination.module.css";

import Pagination from "react-js-pagination";
import { PaginationComponentProps } from "PostList/Type/PostListType";

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalCount,
  onChange,
  activePage,
  itemsCountPerPage,
}) => {
  const color = useRecoilValue(colorState);

  useEffect(() => {
    const allElements = document.querySelectorAll(`.${styles.pagination} li`);
    allElements.forEach((element) => {
      const htmlElement = element as HTMLElement;

      htmlElement.style.backgroundColor = "white";
      htmlElement.style.border = `1px solid ${color.background}`;

      const link = htmlElement.querySelector("a");
      if (link) {
        link.style.color = "black";
      }
    });

    const activeElement = document.querySelector(
      `.${styles.pagination} .current`
    ) as HTMLElement;

    const disabledElement = document.querySelectorAll(
      `.${styles.pagination} .disabled`
    );

    if (activeElement) {
      activeElement.style.backgroundColor = color.background;
      const link = activeElement.querySelector("a");
      if (link) {
        link.style.color = "white";
      }
    }

    disabledElement.forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.backgroundColor = "lightgray";
      htmlElement.style.border = "1px solid lightgray";
      const link = htmlElement.querySelector("a");
      if (link) {
        link.style.color = "white";
      }
    });
  }, [activePage, color.background]);

  return (
    <div className={styles.pagination}>
      <Pagination
        totalItemsCount={Number(totalCount)}
        onChange={onChange}
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        nextPageText=">"
        prevPageText="< "
        activeClass="current"
      />
    </div>
  );
};

export default PaginationComponent;
