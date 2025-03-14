import React from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import styles from "../styles/login.module.css";
import Email from "features/Login/components/Email";
import Password from "features/Login/components/Password";
import Loading from "Utils/components/Loading";
import { useLogin } from "features/Login/hooks/useLogin";
import { useFetchUser } from "Utils/hooks/useFetchUser";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { handleLogin } = useLogin();
  const { userInfo, isLoading } = useFetchUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    await handleLogin(data.email, data.password);
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
          <form
            className={styles.box}
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Email
              register={register("email", {
                required: "이메일을 입력해주세요",
              })}
              error={errors.email?.message}
            />

            <Password
              register={register("password", {
                required: "비밀번호를 입력해주세요",
              })}
            />
            {(errors.email || errors.password) && (
              <p className={styles.error}>이메일/비밀번호를 입력해주세요</p>
            )}
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
