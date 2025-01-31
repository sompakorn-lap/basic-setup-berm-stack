import { describe, expect, it } from "bun:test";
import userApi from "./user.api";
import { getTestUrl } from "@/libs/test/utils";

const testUrl = getTestUrl(userApi);

const mockUser = {
  name: "BOM S. LAP",
  email: "sompakorn.lap@student.mahidol.edu",
  age: 21,
};

const mockUpdate = {
  name: "Bom S. Lap",
};

let userId = "";

describe("create user", () => {
  it("should successful", async () => {
    const response = await userApi
      .handle(
        new Request(testUrl, {
          method: "POST",
          body: JSON.stringify(mockUser),
          headers: { "content-type": "application/json" },
        })
      )
      .then((res) => res.json());

    expect(response).toHaveProperty("userId");
    expect(response).toMatchObject(mockUser);

    userId = response.userId;
  });

  it("should conflict", async () => {
    const response = await userApi
      .handle(
        new Request(testUrl, {
          method: "POST",
          body: JSON.stringify(mockUser),
          headers: { "content-type": "application/json" },
        })
      )
      .then((res) => res.text());

    expect(response).toBe("Conflict");
  });
});

describe("get user", () => {
  it("should successful", async () => {
    const response = await userApi
      .handle(new Request(`${testUrl}/${userId}`))
      .then((res) => res.json());

    expect(response).toHaveProperty("userId");
    expect(response).toMatchObject(mockUser);
  });

  it("should not found", async () => {
    const response = await userApi
      .handle(new Request(`${testUrl}/notfound`))
      .then((res) => res.text());

    expect(response).toBe("Not Found");
  });
});

describe("update user", () => {
  it("should not found", async () => {
    const response = await userApi
      .handle(
        new Request(`${testUrl}/notfound`, {
          method: "PATCH",
          body: JSON.stringify(mockUpdate),
          headers: {
            "content-type": "application/json",
          },
        })
      )
      .then((res) => res.text());

    expect(response).toBe("Not Found");
  });

  it("should successful", async () => {
    const response = await userApi
      .handle(
        new Request(`${testUrl}/${userId}`, {
          method: "PATCH",
          body: JSON.stringify(mockUpdate),
          headers: {
            "content-type": "application/json",
          },
        })
      )
      .then((res) => res.json());

    expect(response).toMatchObject({ ...mockUser, ...mockUpdate });
  });
});

describe("delete user", () => {
  it("should successful", async () => {
    const response = await userApi
      .handle(
        new Request(`${testUrl}/${userId}`, {
          method: "delete",
        })
      )
      .then((res) => res.json());
  });
});
