import { APIRequestContext, Page } from "@playwright/test";
import TodoApi from "../apis/todo.service";
import User from "../models/user.model";

export default class NewTodoPage {

  get newTodoInput() {
    return '[data-testid="new-todo"]';
  }

  get submitButton() {
    return '[data-testid="submit-newTask"]';
  }

  async load(page: Page) {
    await page.goto('/todo/new');
  }

  async addTodo(page: Page, newTodoTitle: string) {
    await page.fill(this.newTodoInput, newTodoTitle);
    await page.click(this.submitButton);
  }

  async addTodoWithApi(request: APIRequestContext, user: User) {
    await new TodoApi().addTodo(request, user);
  }
}