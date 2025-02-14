import Elysia from "elysia";

export class Tester<T extends string> {
  private controller: Elysia<T>;
  private prefix: string;

  constructor(controller: Elysia<T>) {
    this.controller = controller;
    this.prefix = controller.config.prefix || "";
  }

  fetch(path: `/${string}`, init?: RequestInit) {
    return this.controller.handle(
      new Request(`http://localhost${this.prefix}${path}`, init)
    );
  }
}