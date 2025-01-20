import { useUsers } from "../logic/hooks";
import UserList from "../view/UserList";

function UserPage() {

  const { data: users } = useUsers();

  if(!users)
    return null;

  return (
    <section>
      <UserList users={users}/>
    </section>
  );
}

export default UserPage;