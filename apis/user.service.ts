import { APIRequestContext } from "@playwright/test";
import User from "../models/user.model";

export default class UserApi {
  async signup(request: APIRequestContext, user: User) {
    return await request.post('/api/v1/users/register', {
      data: {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName
      }
    })
  }
}