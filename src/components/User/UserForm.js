import { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [userValue, setUserValue] = useState({ username: "", age: "" });

  const usernameChangeHandler = (event) => {
    const username = event.target.value;

    setUserValue((prevValue) => {
      return { ...prevValue, username: username };
    });
  };

  const ageChangeHandler = (event) => {
    const age = event.target.value;

    setUserValue((prevValue) => {
      return { ...prevValue, age: age };
    });
  };

  const submitFormUserHandler = (event) => {
    event.preventDefault();
    const user = {
      username: userValue.username,
      age: userValue.age,
      id: Math.random(),
    };

    props.onSaveUser(user);

    setUserValue({
      username: "",
      age: "",
    });
  };

  return (
    <Card>
      <form onSubmit={submitFormUserHandler}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input
            name="username"
            value={userValue.username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input
            name="age"
            type="number"
            value={userValue.age}
            onChange={ageChangeHandler}
          />
        </div>
        <div className={styles["form-control"]}>
          <button>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
