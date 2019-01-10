const uuid = require("uuid");

class Users {
  constructor() {
    this.users = [{ id: 0, email: "a@a.a", password: "982h3d" }];

    this.modelAndSend = (email, password) => {
      const obj = {
        id: uuid(),
        email,
        password
      };
      this.users.push(obj);
      console.log("user inserted");
    };
  }

  findEmail(email) {
    return new Promise((resolve, reject) => {
      const found = this.users.find(user => user.email === email);
      resolve(found);
    });
  }

  insertUser(email, hashedPassword) {
    this.modelAndSend(email, hashedPassword);
  }
}
module.exports = Users;
