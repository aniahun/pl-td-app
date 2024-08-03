import { Page } from "@playwright/test";

export default class TodoPage {

  async load(page: Page) {
    await page.goto('/todo');
  }
  private get welcomeMassage() {
    return '[data-testid="welcome"]';
  }

  public getWelcomeMessage(page: Page) {
    return page.locator(this.welcomeMassage);
  }

  private get noTodoMessage() {
    return '[data-testid="no-todos"]';
  }

  public getNoTodoMessage(page: Page) {
    return page.locator(this.noTodoMessage);
  }

  private get deleteTodoButton() {
    return '[data-testid="no-todos"]';
  }

  public async deleteTodo(page: Page) {
    await page.click(this.deleteTodoButton);
  }

  get newTodo() {
    return '[data-testid="todo-text"]';
  }

  getNewTodoElement(page: Page) {
    return page.locator(this.newTodo);
  } 
}