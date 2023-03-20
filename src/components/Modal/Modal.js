import styles from "./Modal.module.css";
const Modal = (props) => {
  return (
    <div className={`${styles.modal}`}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles["modal-body"]}>
          <p>{props.body}</p>
          <button onClick={props.onModalClick}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
