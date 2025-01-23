import styles from "../styles/component.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div className={styles.button}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
