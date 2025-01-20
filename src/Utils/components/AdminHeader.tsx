import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/component.module.css";
import { AdminHeaderInterface } from "Main/types/Main.type";
import getAccount from "../../Main/services/getAccount.service";

const AdminHeader: React.FC<AdminHeaderInterface> = ({ state }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();

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

  return (
    <div className={styles.header} style={{ backgroundColor: state }}>
      <p onClick={() => navigate("/")}>{title}</p>
    </div>
  );
};

export default AdminHeader;
