import Elysia from "elysia";

const client = new Elysia()
  .get("/static/*", ({ params }) => Bun.file(`../client/dist/${params["*"]}`))
  .get("/*", () => Bun.file("../client/dist/index.html"))
;

export default client;