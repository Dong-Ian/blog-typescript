import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styles from "Login/styles/login.module.css";
import Email from "Login/components/Email";
import Password from "Login/components/Password";
import Loading from "Utils/components/Loading";
import { useLogin } from "Login/hooks/useLogin";
import { useFetchUser } from "Utils/hooks/useFetchUser";

const LoginPage: React.FC = () => {
  const { handleLogin } = useLogin();
  const { userInfo, isLoading } = useFetchUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleLogin(email, password);
  };

  if (isLoading || !userInfo) {
    return <Loading />;
  }

  return (
    <>
      <Helmet title="Login" />
      <div
        className={styles.login}
        style={{ backgroundColor: userInfo ? userInfo.color : "#000" }}
      >
        <div className={styles.title}>
          <p>Welcome to {userInfo ? userInfo.title : "Archive"}</p>
        </div>
        <div className={styles.outer_box}>
          <form className={styles.box} method="post" onSubmit={onSubmit}>
            <Email value={email} onChange={setEmail} />
            <Password value={password} onChange={setPassword} />
            <input
              className={styles.loginBtn}
              style={{ backgroundColor: userInfo ? userInfo.color : "#000" }}
              type="submit"
              value="로그인"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
