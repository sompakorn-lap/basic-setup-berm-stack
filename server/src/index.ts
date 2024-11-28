import { Elysia } from "elysia";
import staticPlugin from "@elysiajs/static";
import { resolve } from "path";

const app = new Elysia()
  .use(staticPlugin({
    assets: resolve(__dirname, "../../client/dist"),
    prefix: "/"
  }))
  .get("*", () => Bun.file(resolve(__dirname, "../../client/dist/index.html")))
  .listen(3000)
;

console.log(`running at ${app.server?.hostname}:${app.server?.port}`);
