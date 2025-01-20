import Elysia from "elysia";
import User from "./service";
import { userInsertSchema, userUpdateSchema } from "./schema";

const userApi = new Elysia({ prefix: "/user" })
  .get("/", () => User.gets())
  .get("/:userId", ({ params: { userId } }) => User.get(userId))
  .post("/", ({ body }) => User.create(body), {
    body: userInsertSchema
  })
  .delete("/:userId", ({ params: { userId } }) => User.delete(userId))
  .put("/:userId", ({ body, params: { userId } }) => User.update(userId, body), {
    body: userUpdateSchema
  })
;

export default userApi;