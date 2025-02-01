import Elysia from "elysia";
import UserService from "./user.service";
import { createUserSchema, updateUserSchema } from "./user.schema";

const userApi = new Elysia({ prefix: "/user" })
  .get("/", () => UserService.gets())
  .get("/:userId", async ({ params: { userId }, error }) => {
    const user = await UserService.getByUserId(userId);
    if (!user) return error("Not Found");
    return user;
  })
  .post(
    "/",
    async ({ body, error }) => {
      const { email } = body;
      const duplicate = await UserService.get({ email });
      if (duplicate) return error("Conflict");

      const user = await UserService.create(body);
      return user;
    },
    {
      body: createUserSchema,
    }
  )
  .delete("/:userId", ({ params: { userId } }) =>
    UserService.deleteByUserId(userId)
  )
  .patch(
    "/:userId",
    async ({ body, params: { userId }, error }) => {
      const available = await UserService.getByUserId(userId);
      if (!available) return error("Not Found");

      const user = await UserService.updateByUserId(userId, body);
      return user;
    },
    {
      body: updateUserSchema,
    }
  );

export default userApi;
