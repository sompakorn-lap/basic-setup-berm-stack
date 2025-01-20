import * as v from "valibot";

const userSchema = v.object({
  userId: v.string(),
  name: v.string(),
  age: v.number(),
  email: v.string()
});

export default userSchema;

export type UserType = v.InferOutput<typeof userSchema>;