import styles from "Utils/styles/component.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.spinner_container}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
