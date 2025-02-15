import styles from "../styles/login.module.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface EmailProps {
  register: UseFormRegisterReturn;
  error?: string;
}

const Password = ({ register, error }: EmailProps) => {
  return (
    <div className={styles.input}>
      <p>비밀번호</p>
      <input {...register} type="password" placeholder="Password" />
    </div>
  );
};

export default Password;
