import { APIRequestContext, BrowserContext, Page, request } from "@playwright/test";
import User from "../models/user.model";
import UserApi from "../apis/user.service";
import config from '../playwright.config';

export default class SignupPage {
  private get firstNameInput() {
    return '[data-testid="first-name"]';
  }

  private get lastNameInput() {
    return '[data-testid="last-name"]';
  }

  private get emailInput() {
    return '[data-testid="email"]';
  }

  private get passwordInput() {
    return '[data-testid="password"]';
  }

  private get confirmPasswordInput() {
    return '[data-testid="confirm-password"]';
  }

  private get submitButton() {
    return '[data-testid="submit"]';
  }
  async load(page: Page) {
    await page.goto('/signup');
  }

  async signup(page: Page, user: User) {
    await page.fill(this.firstNameInput, user.firstName);
    await page.fill(this.lastNameInput, user.lastName);
    await page.fill(this.emailInput, user.email);
    await page.fill(this.passwordInput, user.password);
    await page.fill(this.confirmPasswordInput, user.password);
    await page.click(this.submitButton);
  }

  async signupWithAPI(request: APIRequestContext, user: User, context: BrowserContext) {
    const response = await new UserApi().signup(request, user);

    const responseBody = await response.json();

    const { access_token, firstName, userID } = responseBody;
    console.log(access_token);
    user.accessToken = access_token;
    user.userId = userID;

    await context.addCookies([{
        name: 'access_token',
        value: access_token,
        url: config.use?.baseURL
      },
      {
        name: 'firstName',
        value: firstName,
        url: config.use?.baseURL
      },
      {
        name: 'userID',
        value: userID,
        url: config.use?.baseURL
      }
    ])
  }
}