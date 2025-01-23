import React, { useEffect } from "react";
import styles from "PostList/styles/pagination.module.css";
import { PaginationComponentProps } from "PostList/types/PostList.type";
import { useFetchUser } from "Utils/hooks/useFetchUser";
import Pagination from "react-js-pagination";

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalCount,
  onChange,
  activePage,
  itemsCountPerPage,
}) => {
  const { userInfo, isLoading } = useFetchUser();

  useEffect(() => {
    const allElements = document.querySelectorAll(`.${styles.pagination} li`);
    allElements.forEach((element) => {
      const htmlElement = element as HTMLElement;

      htmlElement.style.backgroundColor = "white";
      htmlElement.style.border = `1px solid ${userInfo?.color}`;

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

    if (activeElement && userInfo) {
      activeElement.style.backgroundColor = userInfo.color;
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
  }, [activePage, userInfo]);

  if (isLoading) {
    return null;
  }
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
