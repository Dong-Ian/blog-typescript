import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/component.module.css";
import getAccount from "Main/services/getAccount.service";
import { getLuminance } from "Utils/services/getLuminance";
import { AdminHeaderInterface } from "Main/types/Main.type";

const AdminHeader: React.FC<AdminHeaderInterface> = ({ state }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [textColor, setTextColor] = useState<string>("");

  const handleGetAccount = async () => {
    const result = await getAccount();

    if (result.result) {
      setTitle(result.profileResult.title);
    }

    return;
  };

  useEffect(() => {
    handleGetAccount();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const luminance = getLuminance(state);
    setTextColor(luminance > 0.5 ? "black" : "white");
  }, [state]);

  return (
    <div className={styles.header} style={{ backgroundColor: state }}>
      <p
        onClick={() => navigate("/")}
        style={{ color: textColor, fontFamily: "Times New Roman" }}
      >
        {title}
      </p>
    </div>
  );
};

export default AdminHeader;
