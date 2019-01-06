import ClientDb from "../ClientDb";

export default class Calls {
  constructor() {
    this.response = [];
  }

  // functions for fetching the local storage
  getDataFromIndexedDb() {
    const db = new ClientDb();
    this.response = db.getRecords();
    console.log(this.response);
    return this.response;
  }
  pushDataToIndexedDb() {}
  // functions to get something from remote storage
  getDataFromBackend() {}
  pushDataToBackend() {}
}
