const uuid = require("uuid");

class Records {
  constructor() {
    this.records = [
      {
        userId: "123",
        id: uuid(),
        title: "Title",
        body: "This Is the encrypted messge!? /wow",
        date: 2341423098,
        checked: false,
        sessionId: 9328493
      },
      {
        userId: "123",
        id: uuid(),
        title: "Title",
        body: "This Is the encrypted messge!? /wow",
        date: 2341423098,
        checked: false,
        sessionId: 9328493
      },

      {
        userId: "124",
        id: uuid(),
        title: "Title",
        body: "This Is the encrypted messge!? /wow",
        date: 2341423098,
        checked: false,
        sessionId: 984973
      }
    ];
  }

  searchAllUserId(userId) {
    return new Promise((resolve, reject) => {
      const result = this.records.filter(r => r.userId === userId);

      if (result) {
        resolve(result);
      } else {
        reject({ err: "Record for this user not found" });
      }
    });
  }

  async insertRecord(userId, title, body, date, sessionId) {
    const newRecord = {
      userId,
      id: uuid(),
      title,
      body,
      date,
      checked: false,
      sessionId
    };

    await this.records.unshift(newRecord);
    const response = await this.searchAllUserId(userId);

    return response;
  }

deleteRecord(userId, recordId) {
 return new Promise((resolve,reject)=>{
   const updated = this.records.filter(record=>! ((record.userId === userId)&&(record.id === recordId)) );
    this.records = [...updated];
    resolve({success:"yes"});
 });
}

}// end class



module.exports = Records;
