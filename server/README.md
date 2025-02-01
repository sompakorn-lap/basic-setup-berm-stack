# Server

## Folder structure

### `features/`

Each feature in the application follows a modular structure with the following file conventions:

- **`*.table.ts`** - Defines the Mongoose schema for the database.

```js
import { model, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const itemTable = model(
  "item",
  new Schema({
    itemId: {
      type: String,
      default: uuidv4,
    },
    name: {
      type: String,
      required: true,
    },
  })
);

export default itemTable;
```

- **`*.schema.ts`** - Defines TypeBox schemas and TypeScript types.

```js
import { t } from "elysia";

const itemSchema = t.Object({
  itemId: t.String(),
  name: t.String()
});

export const createItemSchema = t.Omit(itemSchema, ["itemId"]);
export type CreateItemType = typeof createItemSchema.static;
```

- **`*.service.ts`** - Contains service functions and business logic.

```js
import { CreateItemType } from "./item.schema";
import itemTable from "./item.table";

class ItemService {
  static async gets() {
    const items = await itemTable.find().lean().exec();
    return items;
  }

  static async create(data: CreateItemType) {
    const item = await itemTable.create(data);
    return item.toJSON();
  }
}

export default ItemService;
```

- **`*.api.ts`** - Combines service functions and handles routing.

```js
import Elysia from "elysia";
import ItemService from "./item.service";
import { createItemSchema } from "./item.schema";

const itemApi = new Elysia({ prefix: "/item" })
  .get("/", () => ItemService.gets())
  .post("/", ({ body }) => ItemService.create(body), {
    body: createItemSchema,
  });

export default itemApi;
```

- **`*.api.test.ts`** - Contains test and test cases for the API.

```js
import { describe, expect, it } from "bun:test";
import itemApi from "./item.api";
import { getTestUrl } from "@/libs/test/utils";

const testUrl = getTestUrl(itemApi);

const mockItem = {
  name: "testing-item",
};

describe("create item", () => {
  it("should successful", async () => {
    const response = await itemApi
      .handle(
        new Request(testUrl, {
          method: "POST",
          body: JSON.stringify(mockItem),
          headers: { "content-type": "application/json" },
        })
      )
      .then((res) => res.json());

    expect(response).toHaveProperty("item");
    expect(response).toMatchObject(mockItem);
  });
});
```

### `libs/`

A collection of reusable utilities, middleware, and helper functions for the application.

## Elysia plugins

- **@elysiajs/static** - This plugin can serve static files/folders for Elysia Server.
- **@elysiajs/swagger** - This plugin generates a Swagger endpoint for an Elysia server.
