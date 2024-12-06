import { Elysia } from "elysia";
import staticPlugin from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
import { resolve } from "path";
import connectDatabase from "./libs/mongoose/connectDatabase";
import api from "./api";

connectDatabase();


const CLIENT_PATH = resolve(__dirname, "../../client/dist");

const app = new Elysia()
  .use(swagger())
  .use(staticPlugin({
    assets: CLIENT_PATH,
    prefix: "/"
  }))
  .use(api)
  .get("*", () => Bun.file(`${CLIENT_PATH}/index.html`))
  .listen(3000)
;

console.log(`running at ${app.server?.hostname}:${app.server?.port}`);
