# Server

## Folder structure

### `features/`
Each feature in the application follows a modular structure with the following file conventions:
- **`*.table.ts`** - Defines the Mongoose schema for the database.
- **`*.schema.ts`** - Defines TypeBox schemas and TypeScript types.
- **`*.service.ts`** - Contains service functions and business logic.
- **`*.api.ts`** - Combines service functions and handles routing.
- **`*.api.test.ts`** - Contains test and test cases for the API.

### `libs/`
A collection of reusable utilities, middleware, and helper functions for the application.

## Elysia plugins
- **@elysiajs/static** - This plugin can serve static files/folders for Elysia Server.
- **@elysiajs/swagger** - This plugin generates a Swagger endpoint for an Elysia server.