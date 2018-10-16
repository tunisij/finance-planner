export class User {
  username?: String;
  name?: String;
  email?: String;

  constructor(username?: String, name?: String, email?: String) {
    this.username = username;
    this.name = name;
    this.email = email;
  }

}
