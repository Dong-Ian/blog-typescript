import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useSetRecoilState } from "recoil";
import { isLoggedInState, tokenState } from "Utils/Atom/Atom";

import styles from "../Style/login.module.css";

import LoginFunction from "Login/Function/LoginFunction";
import GetAccountFunction from "Main/Function/GetAccountFunction";
import Email from "Login/Component/Email";
import Password from "Login/Component/Password";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const setToken = useSetRecoilState(tokenState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  async function Login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = await LoginFunction({ email, password });

    if (!result.react) {
      alert("이메일/비밀번호가 일치하지 않습니다.");
      return;
    }

    setToken(result.token);
    setIsLoggedIn(true);
    navigate("/");

    return;
  }

  async function GetAccount() {
    const result = await GetAccountFunction();

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
    GetAccount();
  }, []);

  return (
    <>
      <Helmet title="Login" />
      <div className={styles.login} style={{ backgroundColor: color }}>
        <div className={styles.title}>
          <p>Welcome to {title}</p>
        </div>
        <div className={styles.outer_box}>
          <form className={styles.box} method="post" onSubmit={Login}>
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
