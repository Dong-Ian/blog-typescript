import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/component.module.css";
import accountIcon from "Utils/images/person_white.png";
import { useCheckUser } from "Utils/hooks/useChcekUser";
import { useFetchUser } from "Utils/hooks/useFetchUser";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { userInfo } = useFetchUser();
  const { isValidUser, handleCheckUser } = useCheckUser();

  useEffect(() => {
    handleCheckUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!userInfo) return <div>Loading</div>;
  return (
    <div className={styles.header} style={{ backgroundColor: userInfo.color }}>
      <div className={styles.left_box}>
        {isValidUser && (
          <div onClick={() => navigate("/posting")}>
            <p>Posting</p>{" "}
          </div>
        )}
      </div>
      <p
        style={{ fontFamily: "Times New Roman" }}
        onClick={() => navigate("/")}
      >
        {userInfo.title}
      </p>
      <div className={styles.right_box}>
        {isValidUser && (
          <img
            style={{ cursor: "pointer" }}
            src={accountIcon}
            alt="account icon"
            onClick={() => navigate("/admin")}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
