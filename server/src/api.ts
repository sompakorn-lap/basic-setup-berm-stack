import Elysia from "elysia";
import userApi from "./features/user/user.api";

const api = new Elysia({ prefix: "/api" })
  .use(userApi)
  .get("/json-in-env", () => JSON.parse(process.env.DATA as string))
;

export default api;