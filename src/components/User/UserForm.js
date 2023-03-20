import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  return (
    <Card>
      <form>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input />
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input />
        </div>
        <div className={styles["form-control"]}>
          <button>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
