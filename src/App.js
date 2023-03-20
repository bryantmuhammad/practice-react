import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/User/UserList";
import { useState, Fragment } from "react";
import Modal from "./components/Modal/Modal";
import UserForm from "./components/User/UserForm";

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

function App() {
  const [users, setUser] = useState(listUser);
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(showModal ? false : true);
  };

  return (
    <Fragment>
      {showModal && (
        <Modal
          onModalClick={modalHandler}
          title="Validation Error"
          body="Please enter a valid name"
        />
      )}
      {/* <button onClick={modalHandler}>open modal</button> */}

      <UserForm />
      <UserList users={users} />
    </Fragment>
  );
}
{
  /*  */
}

export default App;
