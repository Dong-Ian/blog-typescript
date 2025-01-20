import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { colorState } from "../atom/Atom";
import styles from "../styles/component.module.css";
import getAccount from "../../Main/services/getAccount.service";
import accountIcon from "../images/person_white.png";
import { useCheckUser } from "Utils/hooks/useChcekUser";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [color, setColor] = useRecoilState(colorState);
  const { isValidUser, handleCheckUser } = useCheckUser();

  const handleGetAccount = async () => {
    const result = await getAccount();

    if (result.result) {
      setTitle(result.profileResult.title);
      setColor({ background: result.profileResult.color });
    }

    return;
  };

  useEffect(() => {
    handleGetAccount();
    handleCheckUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles.header}
      style={{ backgroundColor: color.background }}
    >
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
        {title}
      </p>
      <div className={styles.right_box}>
        {isValidUser && (
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
