import Card from "../UI/Card";
import Users from "./Users";

const UserList = (props) => {
  return (
    <Card>
      {props.users.map((user) => (
        <Users name={user.name} age={user.age} key={user.id} />
      ))}
    </Card>
  );
};

export default UserList;
