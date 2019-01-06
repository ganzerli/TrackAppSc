import ClientDb from "../ClientDb";

export default class Calls {
  constructor() {
    this.response = [];
  }

  // functions for fetching the local storage

  getDataFromIndexedDb() {
    let resp;
    const db = new ClientDb();
    resp = db.getRecords();

    return resp;
    // return this.response;
  }

  // called from the action of the form to add an element
  pushDataToIndexedDb(data) {
    const db = new ClientDb();
    return db.insertRecord(data);
  }
  // functions to get something from remote storage
  getDataFromBackend() {}
  pushDataToBackend() {}
}
