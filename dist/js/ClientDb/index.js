export default class ClientDb {
  constructor() {
    this.set = [
      { id: 1, title: "some title", body: "some body" },
      { id: 2, title: "another title", body: "somebody 2" }
    ];
  }

  insertRecord(record) {
    // taking the record and push into array
    return this.set;
  }
  getRecords() {
    // getting all records and make an array
    return this.set;
  }
}
