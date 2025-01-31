import Elysia from "elysia";

export function getTestUrl<T extends string>(controller: Elysia<T>) {
  const { prefix } = controller.config;
  return `http://localhost${prefix}`;
}
