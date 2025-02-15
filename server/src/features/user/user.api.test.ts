import { describe, expect, it } from "bun:test";
import userApi from "./user.api";
import { Tester } from "@/libs/test/utils";

const mockUser = {
  name: "BOM S. LAP",
  email: "test@gmail.com",
  age: 21,
};

const mockUpdate = {
  name: "Bom S. Lap",
};

let userId: string = "";

const tester = new Tester(userApi);

describe("create user", () => {
  it("should successful", async () => {
    const response = await tester
      .fetch("/", {
        method: "POST",
        body: JSON.stringify(mockUser),
        headers: { "content-type": "application/json" },
      })
      .then((res) => res.json());

    expect(response).toHaveProperty("userId");
    expect(response).toMatchObject(mockUser);

    userId = response.userId;
  });

  it("should conflict", async () => {
    const response = await tester
      .fetch("/", {
        method: "POST",
        body: JSON.stringify(mockUser),
        headers: { "content-type": "application/json" },
      })
      .then((res) => res.text());

    expect(response).toBe("Conflict");
  });
});

describe("get user", () => {
  it("should successful", async () => {
    const response = await tester.fetch(`/${userId}`).then((res) => res.json());

    expect(response).toHaveProperty("userId");
    expect(response).toMatchObject(mockUser);
  });

  it("should not found", async () => {
    const response = await tester.fetch(`/notfound`).then((res) => res.text());

    expect(response).toBe("Not Found");
  });
});

describe("update user", () => {
  it("should not found", async () => {
    const response = await tester
      .fetch("/notfound", {
        method: "PATCH",
        body: JSON.stringify(mockUpdate),
        headers: { "content-type": "application/json" },
      })
      .then((res) => res.text());

    expect(response).toBe("Not Found");
  });

  it("should successful", async () => {
    const response = await tester
      .fetch(`/${userId}`, {
        method: "PATCH",
        body: JSON.stringify(mockUpdate),
        headers: { "content-type": "application/json" },
      })
      .then((res) => res.json());

    expect(response).toMatchObject({ ...mockUser, ...mockUpdate });
  });
});

describe("delete user", () => {
  it("should successful", async () => {
    const response = await tester
      .fetch(`/${userId}`, { method: "DELETE" })
      .then((res) => res.json());
  });
});
