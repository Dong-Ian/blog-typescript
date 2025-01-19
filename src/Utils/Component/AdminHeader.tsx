import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Style/component.module.css";
import { AdminHeaderInterface } from "Main/Type/MainType";
import GetAccountFunction from "../../Main/Function/GetAccountFunction";

const AdminHeader: React.FC<AdminHeaderInterface> = ({ state }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();

  async function GetAccount() {
    const result = await GetAccountFunction();

    if (result.result) {
      setTitle(result.profileResult.title);
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
      style={{ backgroundColor: state.background }}
    >
      <p onClick={() => navigate("/")}>{title}</p>
    </div>
  );
};

export default AdminHeader;
