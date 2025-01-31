import Elysia from "elysia";
import { userInsertSchema, userUpdateSchema } from "./user.schema";
import userTable from "./user.table";

const userApi = new Elysia({ prefix: "/user" })
  .get("/", () => userTable.find().lean().exec())
  .get("/:userId", async ({ params: { userId }, error }) => {
    const user = await userTable.findOne({ userId }).lean().exec();
    if (!user) return error("Not Found");
    return user;
  })
  .post(
    "/",
    async ({ body, error }) => {
      const { email } = body;
      const duplicate = await userTable.findOne({ email }).lean().exec();
      if (duplicate) return error("Conflict");

      const user = await userTable.create(body);
      return user.toJSON();
    },
    {
      body: userInsertSchema,
    }
  )
  .delete("/:userId", ({ params: { userId } }) =>
    userTable.findOneAndDelete({ userId }).lean().exec()
  )
  .patch(
    "/:userId",
    async ({ body, params: { userId }, error }) => {
      const available = await userTable.findOne({ userId }).lean().exec();
      if (!available) return error("Not Found");

      const user = await userTable
        .findOneAndUpdate({ userId }, body, { new: true })
        .lean()
        .exec();
      return user;
    },
    {
      body: userUpdateSchema,
    }
  );
export default userApi;
