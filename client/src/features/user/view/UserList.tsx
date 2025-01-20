import { UserType } from "../logic/schema";

type UserListPropsType = {
  users: UserType[]
};

function UserList({ users }: UserListPropsType) {
  return (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>name</th>
          <th>age</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ userId, name, age, email }) => (
          <tr key={userId}>
            <td>{userId}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;