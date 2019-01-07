import ClientDb from "../ClientDb";

export default class Calls {
  constructor() {
    this.response = [];
  }

  // functions for fetching the local storage

  getDataFromIndexedDb() {
    let promise;
    const db = new ClientDb();
    promise = db.getRecords();
    return promise;
    // return this.response;
  }

  // called from the action of the form to add an element
  pushDataToIndexedDb(data) {
    const db = new ClientDb();
    return db.insertRecord(data);
  }

  deleteFromIndexedDb(id) {
    const db = new ClientDb();
    // check the returned value
    db.deleteOne(id);
  }
  // functions to get something from remote storage
  getDataFromBackend() {}
  pushDataToBackend() {}
}
