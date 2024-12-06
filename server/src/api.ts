import Elysia from "elysia";

const api = new Elysia({ prefix: "/api" })
  .get("/", () => "test api")
;

export default api;