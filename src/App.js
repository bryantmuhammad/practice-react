import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/User/UserList";
import { useState } from "react";

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

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;
