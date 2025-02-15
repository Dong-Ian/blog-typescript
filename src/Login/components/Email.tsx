import styles from "../styles/login.module.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface EmailProps {
  register: UseFormRegisterReturn;
  error?: string;
}

const Email = ({ register, error }: EmailProps) => {
  return (
    <div className={styles.input}>
      <p>이메일</p>
      <input {...register} type="email" placeholder="Email" />
    </div>
  );
};

export default Email;
