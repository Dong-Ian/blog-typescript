import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styles from "../styles/login.module.css";
import Email from "Login/components/Email";
import Password from "Login/components/Password";
import { useLogin } from "Login/hooks/useLogin";
import { useRecoilValue } from "recoil";
import { colorState, titleState } from "Utils/atom/Atom";

const LoginPage: React.FC = () => {
  const { handleLogin } = useLogin();
  const title = useRecoilValue(titleState);
  const color = useRecoilValue(colorState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleLogin(email, password);
  };

  return (
    <>
      <Helmet title="Login" />
      <div
        className={styles.login}
        style={{ backgroundColor: color.background }}
      >
        <div className={styles.title}>
          <p>Welcome to {title}</p>
        </div>
        <div className={styles.outer_box}>
          <form className={styles.box} method="post" onSubmit={onSubmit}>
            <Email value={email} onChange={setEmail} />
            <Password value={password} onChange={setPassword} />
            <input
              className={styles.loginBtn}
              style={{ backgroundColor: color.background }}
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
