import { beforeAll, expect } from "bun:test";
import connectDatabase from "./libs/mongoose/connectDatabase";

beforeAll(async () => {
  await connectDatabase();
});