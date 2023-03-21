import Card from "../UI/Card";
import Users from "./Users";

const UserList = (props) => {
  return (
    <Card>
      {props.users.map((user) => (
        <Users name={user.username} age={user.age} key={user.id} />
      ))}
    </Card>
  );
};

export default UserList;
