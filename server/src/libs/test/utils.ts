import Elysia from "elysia";

type Path = `/${string}`;

export class Tester<T extends string> {
  private controller: Elysia<T>;
  private baseURL: string;

  constructor(controller: Elysia<T>) {
    this.controller = controller;
    this.baseURL = `http://localhost${controller.config.prefix || ""}`;
  }

  fetch(path: Path, options?: RequestInit) {
    return this.controller.handle(
      new Request(`${this.baseURL}${path}`, options)
    );
  }
}
