import { Elysia } from "elysia";
import connectDatabase from "./libs/mongoose/connectDatabase";
import client from "./client";
import api from "./api";
import swagger from "@elysiajs/swagger";

const PORT = parseInt(process.env.PORT as string) || 3000;

connectDatabase();
const app = new Elysia()
  .use(client)
  .use(api)
  .use(swagger({
    path: "/docs"
  }))
  .listen(PORT)
;

console.log(`running at ${app.server?.hostname}:${app.server?.port}`);
