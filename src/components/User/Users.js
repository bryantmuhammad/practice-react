import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={styles.users}>
      <div className={styles.users__list}>
        {props.name} ({props.age} Years Old)
      </div>
    </div>
  );
};

export default Users;
