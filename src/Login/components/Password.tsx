import styles from "Login/styles/login.module.css";
import { TextFieldProps } from "Login/types/Login.type";

const Password = ({ value, onChange }: TextFieldProps) => {
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };

  return (
    <div className={styles.input}>
      <p>비밀번호</p>
      <input
        onChange={handlePassword}
        type="password"
        placeholder="Password"
        name="password"
        value={value}
      />
    </div>
  );
};

export default Password;
