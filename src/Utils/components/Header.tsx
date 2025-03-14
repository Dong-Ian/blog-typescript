import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/component.module.css";
import whiteAccountIcon from "utils/images/person_white.png";
import blackAccountIcon from "utils/images/person_black.png";
import { getLuminance } from "utils/services/getLuminance";
import { useCheckUser } from "utils/hooks/useChcekUser";
import { useFetchUser } from "utils/hooks/useFetchUser";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { userInfo } = useFetchUser();
  const { isValidUser } = useCheckUser();
  const [textColor, setTextColor] = useState<string>("");

  useEffect(() => {
    if (userInfo?.color) {
      const luminance = getLuminance(userInfo.color);
      setTextColor(luminance > 0.5 ? "black" : "white");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!userInfo) return <div>Loading</div>;
  return (
    <div className={styles.header} style={{ backgroundColor: userInfo.color }}>
      <div className={styles.left_box}>
        {isValidUser && (
          <div
            style={{ borderColor: textColor }}
            onClick={() => navigate("/posting")}
          >
            <p style={{ color: textColor }}>Posting</p>{" "}
          </div>
        )}
      </div>
      <p
        style={{ color: textColor, fontFamily: "Times New Roman" }}
        onClick={() => navigate("/")}
      >
        {userInfo.title}
      </p>
      <div className={styles.right_box}>
        {isValidUser && (
          <img
            style={{ cursor: "pointer" }}
            src={textColor === "white" ? whiteAccountIcon : blackAccountIcon}
            alt="account icon"
            onClick={() => navigate("/admin")}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
