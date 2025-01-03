import { Elysia } from "elysia";
import connectDatabase from "./libs/mongoose/connectDatabase";
import api from "./api";
import swagger from "@elysiajs/swagger";
import staticPlugin from "@elysiajs/static";

const PORT = parseInt(process.env.PORT as string) || 3000;

connectDatabase();
const app = new Elysia()
  .use(staticPlugin({
    assets: "../client/dist",
    prefix: "/static"
  }))
  .get("*", () => Bun.file("../client/dist/index.html"))
  .use(api)
  .use(swagger({
    path: "/docs"
  }))
  .listen(PORT)
;

console.log(`running at ${app.server?.hostname}:${app.server?.port}`);
