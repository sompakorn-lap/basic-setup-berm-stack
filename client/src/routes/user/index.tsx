import { createFileRoute } from "@tanstack/react-router";
import { useUsers } from "@/features/user/hook";
import UserList from "@/features/user/UserList";

export const Route = createFileRoute("/user/")({
  component: Page,
});

function Page() {
  const { data: users, isLoading, error } = useUsers();

  if (error) return <h1>ERROR</h1>;

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <section>
      <UserList users={users} />
    </section>
  );
}
