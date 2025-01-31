import { beforeAll, expect } from "bun:test";
import connectDatabase from "./libs/mongoose/connectDatabase";

beforeAll(async () => {
  const response = await connectDatabase();
  expect(response).toBe("connect mongodb successfully.");
});