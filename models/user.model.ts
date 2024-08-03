import { faker } from "@faker-js/faker";

export default class User {
  private _accessToken: string;
  private _userId: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _password: string


  constructor() {
    this._firstName = faker.person.firstName();
    this._lastName = faker.person.lastName();
    this._email = faker.internet.email();
    this._password = 'Test1234';
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get accessToken() {
    return this._accessToken;
  }

  get userId() {
    return this._userId;
  }

  set accessToken(accessToken: string) {
    this._accessToken = accessToken;
  }

  set userId(userId: string) {
    this._userId = userId;
  }
}