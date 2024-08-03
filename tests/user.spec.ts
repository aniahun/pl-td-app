import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import User from '../models/user.model';
import SignupPage from '../pages/signup.page';
import TodoPage from '../pages/todo.page';

test('should be able to register to the application', async ({ page }) => {
  const user = new User();
  const signupPage = new SignupPage();
  const todoPage = new TodoPage();
  
  await signupPage.load(page);
  await signupPage.signup(page, user);
  const welcomeMessage = todoPage.getWelcomeMessage(page);

  await expect(welcomeMessage).toBeVisible();
})
