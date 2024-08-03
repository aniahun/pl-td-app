import {test, expect} from '@playwright/test';
import User from '../models/user.model';
import SignupPage from '../pages/signup.page';
import TodoPage from '../pages/todo.page';
import NewTodoPage from '../pages/new-todo.page';

test('should be able to add ne todo', async ({ page, request, context }) => {
  const user = new User();
  const signupPage = new SignupPage();
  const newTodoPage = new NewTodoPage();
  const todoPage = new TodoPage();
  const newTodoTitle = 'Learning Playwright';
  await signupPage.signupWithAPI(request, user, context);
  await newTodoPage.load(page);
  await newTodoPage.addTodo(page, newTodoTitle);
  const todoItem = todoPage.getNewTodoElement(page);
  expect(await todoItem.innerText()).toEqual(newTodoTitle);
});

test('should be able to delete a todo', async ( {page, request, context}) => {
  const user = new User();
  const signupPage = new SignupPage();
  const todoPage = new TodoPage();
  const newTodoPage = new NewTodoPage();

  await signupPage.signupWithAPI(request, user, context);

  await todoPage.load(page);
  await newTodoPage.addTodoWithApi(request, user);
  await todoPage.deleteTodo(page);

  const noTodoMessage = todoPage.getNoTodoMessage(page);
  await expect(noTodoMessage).toBeVisible();
})