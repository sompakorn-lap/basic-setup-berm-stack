import { t } from "elysia";

const userSchema = t.Object({
  userId: t.String(),
  name: t.String(),
  age: t.Number(),
  email: t.String({ format: "email" })
});

export const userInsertSchema = t.Omit(userSchema, ["userId"]);
export type userInsertType = typeof userInsertSchema.static;

export const userUpdateSchema = t.Partial(userInsertSchema);
export type userUpdateType = typeof userUpdateSchema.static;