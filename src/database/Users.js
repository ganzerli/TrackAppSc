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
      return this.users;
    };
  }

  findEmail(email) {
    return new Promise((resolve, reject) => {
      const found = this.users.find(user => user.email === email);
      resolve(found);
    });
  }

  async insertUser(email, hashedPassword) {
    const res = await this.modelAndSend(email, hashedPassword);
    return res;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const all = [...this.users];
      if (all && all.length > 0) {
        resolve(all);
      } else {
        reject([]);
      }
    });
  }
}
module.exports = Users;
