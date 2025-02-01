import { t } from "elysia";

const userSchema = t.Object({
  userId: t.String(),
  name: t.String(),
  age: t.Number(),
  email: t.String({ format: "email" })
});

export const selectUserSchema = t.Partial(userSchema);
export type SelectUserType = typeof selectUserSchema.static;

export const createUserSchema = t.Omit(userSchema, ["userId"]);
export type CreateUserType = typeof createUserSchema.static;

export const updateUserSchema = t.Partial(createUserSchema);
export type UpdateUserType = typeof updateUserSchema.static;