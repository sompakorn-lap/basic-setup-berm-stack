import { createFileRoute } from "@tanstack/react-router";
import { useUsers } from "@/features/user/logic/hooks";
import UserList from "@/features/user/view/UserList";

export const Route = createFileRoute("/user/")({
  component: Page,
});

function Page() {

  const { data: users } = useUsers();

  if(!users)
    return null;

  return (
    <section>
      <UserList users={users}/>
    </section>
  );
}
