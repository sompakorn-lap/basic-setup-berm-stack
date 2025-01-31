import Elysia from "elysia";
import userApi from "./features/user/user.api";

const api = new Elysia({ prefix: "/api" })
  .use(userApi)
;

export default api;