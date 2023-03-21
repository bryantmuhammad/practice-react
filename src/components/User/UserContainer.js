import { Fragment, useState } from "react";
import Modal from "../Modal/Modal";
import UserForm from "./UserForm";
import UserList from "./UserList";

const listUser = [
  {
    name: "Max 1",
    age: 12,
    id: 1,
  },
  {
    name: "Max 2",
    age: 12,
    id: 2,
  },
  {
    name: "Max 3",
    age: 12,
    id: 3,
  },
  {
    name: "Max 4",
    age: 12,
    id: 4,
  },
  {
    name: "Max 5",
    age: 12,
    id: 5,
  },
];

const UserContainer = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    title: "",
    body: "",
  });
  const [users, setUsers] = useState([]);

  const modalHandler = () => {
    setShowModal(showModal ? false : true);
  };

  const saveUserHandler = (user) => {
    if (user.username.trim() == "" || user.age.trim() == "") {
      setModalMessage({
        title: "Invalid input",
        body: "Please enter a valid name and age (non-empty values)",
      });
      modalHandler();
      return;
    }

    if (parseInt(user.age.trim()) < 0) {
      setModalMessage({
        title: "Invalid input",
        body: "Please enter valid age (> 0)",
      });
      modalHandler();
      return;
    }

    setUsers((prevUser) => {
      return [user, ...prevUser];
    });
  };

  return (
    <Fragment>
      {showModal && (
        <Modal
          onModalClick={modalHandler}
          title={modalMessage.title}
          body={modalMessage.body}
        />
      )}
      <UserForm onSaveUser={saveUserHandler} />
      {users.length && <UserList users={users} />}
    </Fragment>
  );
};

export default UserContainer;
