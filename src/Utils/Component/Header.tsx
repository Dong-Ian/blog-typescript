import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { colorState, isLoggedInState } from "../Atom/Atom";
import styles from "../Style/component.module.css";
import GetAccountFunction from "../../Main/Function/GetAccountFunction";
import accountIcon from "../Image/person_white.png";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [color, setColor] = useRecoilState(colorState);
  const [isLoggedIn] = useRecoilState(isLoggedInState);

  async function GetAccount() {
    const result = await GetAccountFunction();

    if (result.result) {
      setTitle(result.profileResult.title);
      setColor({ background: result.profileResult.color });
    }

    return;
  }

  useEffect(() => {
    GetAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles.header}
      style={{ backgroundColor: color.background }}
    >
      <div className={styles.left_box}>
        {isLoggedIn && (
          <div onClick={() => navigate("/posting")}>
            <p>Posting</p>{" "}
          </div>
        )}
      </div>
      <p
        style={{ fontFamily: "Times New Roman" }}
        onClick={() => navigate("/")}
      >
        {title}
      </p>
      <div className={styles.right_box}>
        {isLoggedIn && (
          <img
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
