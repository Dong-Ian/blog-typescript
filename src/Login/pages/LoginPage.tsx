import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/login.module.css";
import login from "Login/services/login.service";
import getAccount from "Main/services/getAccount.service";
import Email from "Login/components/Email";
import Password from "Login/components/Password";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "Utils/Atom/Atom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const isLoggedIn = useSetRecoilState(isLoggedInState);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = await login({ email, password });

    if (!result.result) {
      alert("이메일/비밀번호가 일치하지 않습니다.");
      return;
    }
    isLoggedIn(true);
    navigate("/");

    return;
  }

  async function handleGetAccount() {
    const result = await getAccount();

    if (result.result) {
      setColor(result.profileResult.color);
      setTitle(result.profileResult.title);
      return;
    }

    setColor("#000");
    setTitle("Archive");
    return;
  }

  useEffect(() => {
    handleGetAccount();
  }, []);

  return (
    <>
      <Helmet title="Login" />
      <div className={styles.login} style={{ backgroundColor: color }}>
        <div className={styles.title}>
          <p>Welcome to {title}</p>
        </div>
        <div className={styles.outer_box}>
          <form className={styles.box} method="post" onSubmit={handleLogin}>
            <Email value={email} onChange={setEmail} />
            <Password value={password} onChange={setPassword} />
            <input
              className={styles.loginBtn}
              style={{ backgroundColor: color }}
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
