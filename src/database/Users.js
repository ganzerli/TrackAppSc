const uuid = require("uuid");

class Users {
  constructor() {
    this.users = [{ id: 0, email: "a@a.a", password: "123456" }];

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
      // not rejected to check if user is udefined
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
        reject({ err: "no records found" });
      }
    });
  }

  findOne(email, password) {
    //console.log(email, password + "SAVING!!!!!!!!!");
    return new Promise((resolve, reject) => {
      const found = this.users.find(
        user => user.email === email && user.password === password
      );
      if (found) {
        resolve(found);
      } else {
        reject({ err: "User not found" });
      }
    });
  }
}
module.exports = Users;
