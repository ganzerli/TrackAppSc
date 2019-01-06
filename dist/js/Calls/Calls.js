import ClientDb from "../ClientDb";

export default class Calls {
  constructor() {
    this.response = [];
  }

  // functions for fetching the local storage
  getDataFromIndexedDb() {
    const db = new ClientDb();
    this.response = db.getRecords();
    return this.response;
  }
  // called from the action of the form to add an element
  pushDataToIndexedDb(data) {
    const db = new ClientDb();

    db.recordsDb.onsuccess = () => {
      return this.recordsDb.result;
    };

    db.insertRecord(data);
  }
  // functions to get something from remote storage
  getDataFromBackend() {}
  pushDataToBackend() {}
}
